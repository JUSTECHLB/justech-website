"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Shield,
	Code,
	Layout,
	Server,
	Database,
	Clock,
	TrendingUp,
	CheckCircle,
	RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TechHero() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [showTransformed, setShowTransformed] = useState(false);
	const [revealPercentage, setRevealPercentage] = useState(0);
	const [isRevealed, setIsRevealed] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const canvasRef = useRef(null);
	const containerRef = useRef(null);
	const brushSize = 70;
	const canvasSize = { width: 600, height: 500 };

	const infrastructureItems = [
		{
			before: {
				title: "Weak Security",
				icon: <Shield className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Robust Security",
				icon: <Shield className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Outdated Architecture",
				icon: <Code className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Modular Architecture",
				icon: <Code className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Clunky Interfaces",
				icon: <Layout className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Seamless UI/UX",
				icon: <Layout className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Aging Hardware",
				icon: <Server className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Cloud-Ready Infrastructure",
				icon: <Server className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Siloed Data",
				icon: <Database className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Integrated Systems",
				icon: <Database className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Manual Processes",
				icon: <Clock className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Automated Workflows",
				icon: <Clock className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Limited Scalability",
				icon: <TrendingUp className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Elastic Scalability",
				icon: <TrendingUp className="h-6 w-6 text-green-400" />,
			},
		},
		{
			before: {
				title: "Poor Compliance",
				icon: <CheckCircle className="h-6 w-6 text-red-400" />,
			},
			after: {
				title: "Agile Compliance",
				icon: <CheckCircle className="h-6 w-6 text-green-400" />,
			},
		},
	];

	useEffect(() => {
		setIsLoaded(true);

		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const calculateRevealPercentage = () => {
		if (!canvasRef.current) return 0;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const pixels = imageData.data;

		let transparentPixels = 0;
		const totalPixels = pixels.length / 4;

		const samplingRate = 4;
		for (let i = 0; i < pixels.length; i += 4 * samplingRate) {
			if (pixels[i + 3] < 10) {
				transparentPixels += samplingRate;
			}
		}

		return Math.min(
			100,
			Math.round((transparentPixels / totalPixels) * 100 * samplingRate)
		);
	};

	const handleMouseDown = (e) => {
		e.preventDefault();
		setIsDragging(true);
		setPosition({ x: 0, y: 0 }); // Reset position
		handleScratch(e);
	};

	const handleMouseMove = (e) => {
		e.preventDefault();
		if (!isDragging) return;
		handleScratch(e);
	};

	const handleMouseUp = (e) => {
		e.preventDefault();
		if (!isDragging) return;

		setIsDragging(false);
		setPosition({ x: 0, y: 0 }); // Reset position

		const percentage = calculateRevealPercentage();
		setRevealPercentage(percentage);

		if (percentage > 90 && !isRevealed) {
			setIsRevealed(true);
			setShowTransformed(true);
		}
	};

	const handleScratch = (e) => {
		if (!canvasRef.current || !containerRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const rect = canvas.getBoundingClientRect();

		let clientX, clientY;

		if (e.touches && e.touches.length > 0) {
			clientX = e.touches[0].clientX;
			clientY = e.touches[0].clientY;
		} else {
			clientX = e.clientX;
			clientY = e.clientY;
		}

		const x = clientX - rect.left;
		const y = clientY - rect.top;

		ctx.globalCompositeOperation = "destination-out";

		ctx.beginPath();
		ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
		ctx.fill();

		if (position.x !== 0 && position.y !== 0) {
			ctx.beginPath();
			ctx.lineWidth = brushSize;
			ctx.lineCap = "round";
			ctx.moveTo(position.x, position.y);
			ctx.lineTo(x, y);
			ctx.stroke();

			const steps = 3;
			for (let i = 1; i < steps; i++) {
				const stepX = position.x + (x - position.x) * (i / steps);
				const stepY = position.y + (y - position.y) * (i / steps);
				ctx.beginPath();
				ctx.arc(stepX, stepY, brushSize / 2, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		setPosition((prevPosition) => ({ x, y }));

		if (Math.random() < 0.1) {
			const percentage = calculateRevealPercentage();
			setRevealPercentage(percentage);
		}
	};

	const handleReset = () => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		// Clear canvas and refill with Botatoes
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "#1c1c24";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "#f87171";
		ctx.font = "bold 24px Inter, sans-serif";
		ctx.textAlign = "center";
		ctx.fillText("Legacy Infrastructure", canvas.width / 2, 50);

		ctx.fillStyle = "#9ca3af";
		ctx.font = "14px Inter, sans-serif";
		ctx.fillText(
			"Scratch to reveal the transformation",
			canvas.width / 2,
			80
		);

		drawInfrastructureShapes(ctx, canvas.width, canvas.height);

		setShowTransformed(false);
		setRevealPercentage(0);
		setIsRevealed(false);
	};

	const drawInfrastructureShapes = (ctx, width, height) => {
		const drawServerRack = (x, y, width, height) => {
			ctx.strokeStyle = "#4b5563"; // gray-600
			ctx.lineWidth = 2;
			ctx.strokeRect(x, y, width, height);

			const unitHeight = height / 6;
			for (let i = 0; i < 5; i++) {
				ctx.fillStyle = i % 2 === 0 ? "#374151" : "#4b5563"; // alternate colors
				ctx.fillRect(
					x + 2,
					y + i * unitHeight + 2,
					width - 4,
					unitHeight - 4
				);

				// LED lights
				ctx.fillStyle = i % 3 === 0 ? "#ef4444" : "#10b981"; // red or green LEDs
				ctx.fillRect(
					x + width - 10,
					y + i * unitHeight + unitHeight / 2,
					4,
					4
				);
			}
		};

		drawServerRack(50, 150, 80, 180);
		drawServerRack(150, 180, 80, 180);
		drawServerRack(250, 160, 80, 180);

		ctx.strokeStyle = "#6b7280"; // gray-500
		ctx.lineWidth = 1.5;
		ctx.beginPath();
		ctx.moveTo(130, 240);
		ctx.lineTo(150, 240);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(230, 260);
		ctx.lineTo(250, 260);
		ctx.stroke();

		const drawDatabase = (x, y, width, height) => {
			ctx.fillStyle = "#4b5563"; // gray-600

			// Top ellipse
			ctx.beginPath();
			ctx.ellipse(
				x + width / 2,
				y,
				width / 2,
				height / 6,
				0,
				0,
				Math.PI * 2
			);
			ctx.fill();

			// Rectangle body
			ctx.fillRect(x, y, width, height - height / 6);

			// Bottom ellipse
			ctx.beginPath();
			ctx.ellipse(
				x + width / 2,
				y + height - height / 6,
				width / 2,
				height / 6,
				0,
				0,
				Math.PI * 2
			);
			ctx.fill();

			// Detail lines
			ctx.strokeStyle = "#374151"; // gray-700
			ctx.beginPath();
			ctx.ellipse(x + width / 2, y, width / 2, height / 6, 0, 0, Math.PI);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x, y + height - height / 6);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(x + width, y);
			ctx.lineTo(x + width, y + height - height / 6);
			ctx.stroke();
		};

		drawDatabase(380, 180, 60, 100);
		drawDatabase(460, 220, 60, 100);

		const drawCloud = (x, y, size) => {
			ctx.fillStyle = "#4b5563"; // gray-600
			ctx.beginPath();
			ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
			ctx.arc(x + size * 0.4, y - size * 0.2, size * 0.3, 0, Math.PI * 2);
			ctx.arc(
				x + size * 0.6,
				y + size * 0.1,
				size * 0.35,
				0,
				Math.PI * 2
			);
			ctx.arc(x + size * 0.2, y + size * 0.3, size * 0.3, 0, Math.PI * 2);
			ctx.fill();
		};

		drawCloud(100, 400, 70);
		drawCloud(400, 120, 60);

		// Circuit patterns
		ctx.strokeStyle = "#6b7280"; // gray-500
		ctx.lineWidth = 1;

		// Horizontal lines
		for (let i = 0; i < 5; i++) {
			const y = 350 + i * 15;
			ctx.beginPath();
			ctx.moveTo(200, y);
			ctx.lineTo(500, y);
			ctx.stroke();

			// Connection nodes
			if (i % 2 === 0) {
				ctx.fillStyle = "#4b5563";
				ctx.beginPath();
				ctx.arc(200 + i * 70, y, 4, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		// Vertical connections
		for (let i = 0; i < 4; i++) {
			const x = 250 + i * 80;
			ctx.beginPath();
			ctx.moveTo(x, 350);
			ctx.lineTo(x, 410);
			ctx.stroke();
		}

		const drawWarning = (x, y, size) => {
			ctx.fillStyle = "#f59e0b"; // amber-500
			ctx.beginPath();
			ctx.moveTo(x, y + size);
			ctx.lineTo(x + size, y + size);
			ctx.lineTo(x + size / 2, y);
			ctx.closePath();
			ctx.fill();

			ctx.fillStyle = "#1c1c24";
			ctx.beginPath();
			ctx.arc(x + size / 2, y + size * 0.7, size * 0.1, 0, Math.PI * 2);
			ctx.fill();

			ctx.fillRect(
				x + size * 0.45,
				y + size * 0.3,
				size * 0.1,
				size * 0.3
			);
		};

		drawWarning(50, 320, 30);
		drawWarning(500, 350, 25);

		// 7. Grid pattern (server room floor)
		ctx.strokeStyle = "#374151"; // gray-700
		ctx.lineWidth = 0.5;

		for (let i = 0; i < 10; i++) {
			// Horizontal
			ctx.beginPath();
			ctx.moveTo(50, 450 + i * 10);
			ctx.lineTo(550, 450 + i * 10);
			ctx.stroke();

			// Vertical
			ctx.beginPath();
			ctx.moveTo(50 + i * 50, 450);
			ctx.lineTo(50 + i * 50, 540);
			ctx.stroke();
		}
	};

	const renderAfterImage = () => {
		return (
			<div className="w-full h-full bg-gradient-to-br from-dark-lighter to-dark p-6 flex flex-col">
				<div className="text-center mb-6">
					<h3 className="text-xl font-bold text-green-400 mb-2">
						Transformed Infrastructure
					</h3>
					<p className="text-blue-300 text-sm">
						Modern, efficient, and scalable
					</p>
				</div>
				<div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 content-center">
					{infrastructureItems.map((item, index) => (
						<div
							key={`after-${index}`}
							className="bg-dark-lighter/80 backdrop-blur-sm p-4 rounded-xl border border-blue/30 shadow-lg hover:shadow-blue/20 transition-all duration-300 hover:-translate-y-1 text-center"
						>
							<div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue/20 to-indigo/20 rounded-full flex items-center justify-center mb-3">
								{item.after.icon}
							</div>
							<h4 className="font-medium text-white text-sm mb-1">
								{item.after.title}
							</h4>
							<p className="text-xs text-gray-400">Optimized</p>
						</div>
					))}
				</div>
				<div className="mt-6 text-center">
					<p className="text-blue-300 text-sm">
						<span className="font-semibold">
							{Math.round(revealPercentage)}%
						</span>{" "}
						transformation complete
					</p>
				</div>
			</div>
		);
	};

	const renderMobileVersion = () => {
		return (
			<div className="w-full">
				<div className="mb-6">
					<div className="relative">
						<div className="absolute top-4 right-4 z-10">
							<button
								onClick={() =>
									setShowTransformed(!showTransformed)
								}
								className="bg-dark-lighter/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue/30 flex items-center gap-1 text-xs"
							>
								{showTransformed ? (
									<>
										<span className="text-red-400">
											Show Legacy
										</span>
									</>
								) : (
									<>
										<span className="text-green-400">
											Show Transformed
										</span>
									</>
								)}
							</button>
						</div>

						<div className="transition-all duration-500">
							{showTransformed ? (
								<div className="bg-dark-lighter/80 backdrop-blur-sm p-6 rounded-xl border border-blue/30">
									<h3 className="text-lg font-bold text-green-400 mb-4">
										Transformed Infrastructure
									</h3>
									<div className="grid grid-cols-2 gap-4">
										{infrastructureItems
											.slice(0, 4)
											.map((item, index) => (
												<div
													key={`after-mobile-${index}`}
													className="bg-dark/50 p-4 rounded-lg border border-blue/20 text-center"
												>
													<div className="w-10 h-10 mx-auto bg-gradient-to-br from-blue/20 to-indigo/20 rounded-full flex items-center justify-center mb-2">
														{item.after.icon}
													</div>
													<span className="text-sm text-gray-300">
														{item.after.title}
													</span>
												</div>
											))}
									</div>
								</div>
							) : (
								<div className="bg-dark-lighter/80 backdrop-blur-sm p-6 rounded-xl border border-red-400/30">
									<h3 className="text-lg font-bold text-red-400 mb-4">
										Legacy Infrastructure
									</h3>
									<div className="grid grid-cols-2 gap-4">
										{infrastructureItems
											.slice(0, 4)
											.map((item, index) => (
												<div
													key={`before-mobile-${index}`}
													className="bg-dark/50 p-4 rounded-lg border border-red-400/20 text-center"
												>
													<div className="w-10 h-10 mx-auto bg-gradient-to-br from-red-400/20 to-red-500/10 rounded-full flex items-center justify-center mb-2">
														{item.before.icon}
													</div>
													<span className="text-sm text-gray-300">
														{item.before.title}
													</span>
												</div>
											))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		if (isLoaded && !isMobile && canvasRef.current) {
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");

			canvas.width = canvasSize.width;
			canvas.height = canvasSize.height;

			ctx.fillStyle = "#1c1c24";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#f87171"; // red-400
			ctx.font = "bold 24px Inter, sans-serif";
			ctx.textAlign = "center";
			ctx.fillText("Legacy Infrastructure", canvas.width / 2, 50);

			ctx.fillStyle = "#9ca3af"; // gray-400
			ctx.font = "14px Inter, sans-serif";
			ctx.fillText(
				"Scratch to reveal the transformation",
				canvas.width / 2,
				80
			);

			drawInfrastructureShapes(ctx, canvas.width, canvas.height);

			const initialPercentage = calculateRevealPercentage();
			setRevealPercentage(initialPercentage);
		}
	}, [isLoaded, isMobile, canvasSize.width, canvasSize.height]);

	return (
		<section className="relative pt-2 pb-20 overflow-hidden bg-dark">
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue/5 via-transparent to-transparent"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					<div className="flex-1">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5 }}
							className="mb-6"
						>
							<span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue/20 to-indigo/20 text-blue border border-blue/20 mb-4">
								Tech Transformation
							</span>
							<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
								Reveal Your <br />
								<span className="gradient-text">
									Digital Evolution
								</span>
							</h1>
							<p className="text-xl text-gray-400 mb-10 max-w-xl">
								Transform your business with cutting-edge
								technology solutions that drive innovation,
								efficiency, and competitive advantage in today's
								rapidly evolving digital landscape.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4 mb-8"
						>
							<Link href="/contact">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full">
									Start Your Transformation
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link href="#case-studies">
								<Button
									variant="outline"
									className="border-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full"
								>
									View Success Stories
								</Button>
							</Link>
						</motion.div>

						<motion.div
							className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl"
							initial={{ opacity: 0, y: 20 }}
							animate={isLoaded ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<div className="bg-dark-lighter/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
								<p className="text-gray-400 text-sm">
									Average ROI
								</p>
								<p className="text-3xl font-bold text-white">
									320%
								</p>
							</div>
							<div className="bg-dark-lighter/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
								<p className="text-gray-400 text-sm">
									Implementation
								</p>
								<p className="text-3xl font-bold text-white">
									4-8 wks
								</p>
							</div>
							<div className="bg-dark-lighter/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
								<p className="text-gray-400 text-sm">
									Success Rate
								</p>
								<p className="text-3xl font-bold text-white">
									98.5%
								</p>
							</div>
						</motion.div>
					</div>

					<motion.div
						className="flex-1 relative z-10"
						initial={{ opacity: 0 }}
						animate={isLoaded ? { opacity: 1 } : {}}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						{isMobile ? (
							renderMobileVersion()
						) : (
							<div className="relative w-full max-w-[600px] mx-auto">
								<div className="absolute -inset-4 bg-gradient-to-r from-blue/10 to-indigo/10 rounded-2xl blur-xl -z-10"></div>

								<div
									ref={containerRef}
									className="relative rounded-2xl overflow-hidden border border-blue/20 h-[500px] w-full select-none"
								>
									<div className="absolute inset-0 select-none">
										{renderAfterImage()}
									</div>

									{isLoaded && !isMobile && (
										<canvas
											ref={canvasRef}
											width={600}
											height={500}
											className="absolute inset-0 cursor-pointer touch-none select-none"
											onMouseDown={handleMouseDown}
											onMouseMove={handleMouseMove}
											onMouseUp={handleMouseUp}
											onMouseLeave={handleMouseUp}
											onTouchStart={handleMouseDown}
											onTouchMove={handleMouseMove}
											onTouchEnd={handleMouseUp}
											style={{
												display: showTransformed
													? "none"
													: "block",
											}}
										/>
									)}

									{!isDragging && (
										<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
											<button
												onClick={handleReset}
												className="bg-dark-lighter/80 backdrop-blur-sm px-3 py-1 rounded-full border border-blue/30 flex items-center gap-1 text-xs text-blue-light"
											>
												<RefreshCw className="h-3 w-3" />{" "}
												Reset
											</button>
										</div>
									)}

									{!isRevealed && !isDragging && (
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="bg-dark-lighter/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue/30">
												<p className="text-blue-light text-sm font-medium">
													Scratch to reveal
													transformation
												</p>
											</div>
										</div>
									)}
								</div>

								<motion.div
									className="absolute top-[510px] right-0 bg-dark-lighter/90 backdrop-blur-md border border-blue/20 rounded-xl px-4 py-2 shadow-lg w-max"
									initial={{ opacity: 0, y: 20 }}
									animate={
										isLoaded ? { opacity: 1, y: 0 } : {}
									}
									transition={{ delay: 0.8, duration: 0.6 }}
								>
									<p className="text-sm text-center">
										<span className="text-red-400">
											Legacy Systems
										</span>{" "}
										→{" "}
										<span className="text-blue">
											{Math.round(revealPercentage)}%
											Revealed
										</span>{" "}
										→{" "}
										<span className="text-green-400">
											Business Growth
										</span>
									</p>
								</motion.div>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
