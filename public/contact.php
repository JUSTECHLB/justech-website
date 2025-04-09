<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Only POST requests are allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? null;
$email = $input['email'] ?? null;
$phone = $input['phone'] ?? '';
$service = $input['service'] ?? '';
$message = $input['message'] ?? null;

if (!$name || !$email || !$message) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Name, email and message are required']);
    exit;
}

$dir = __DIR__ . '/contact-submissions';
$filePath = $dir . '/messages.json';

if (!file_exists($dir)) {
    mkdir($dir, 0777, true);
}

$messages = [];

if (file_exists($filePath)) {
    $fileContents = file_get_contents($filePath);
    $messages = json_decode($fileContents, true) ?? [];
}

$newMessage = [
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'service' => $service,
    'message' => $message,
    'submittedAt' => date('c'), // ISO 8601 format
];

$messages[] = $newMessage;

file_put_contents($filePath, json_encode($messages, JSON_PRETTY_PRINT));

http_response_code(200);
echo json_encode(['message' => 'Message saved successfully']);
