"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Database, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
	return (
		<section className="relative min-h-[80vh] md:min-h-[88vh] flex items-start overflow-hidden py-8 md:py-10 bg-dark">
			<div className="absolute inset-0 bg-dark z-0"></div>
			<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue/10 rounded-full blur-[120px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo/10 rounded-full blur-[100px] -z-10"></div>

			<div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>

			<div className="absolute top-1/4 left-[15%] w-16 h-16 rounded-full bg-gradient-to-r from-blue-light to-indigo opacity-80 blur-sm animate-pulse"></div>
			<div className="absolute bottom-1/4 right-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-indigo to-blue-light opacity-60 blur-sm animate-pulse delay-1000 animate-float"></div>
			<div className="absolute top-1/3 right-[30%] w-12 h-12 rounded-full border-2 border-blue-light opacity-30 animate-float"></div>

			<div className="container mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="pt-0 lg:pt-0">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							We Create <br />
							<span className="gradient-text">
								Digital Solutions
							</span>
							<br />
							<span className="relative inline-block">
								<TypewriterEffect
									words={[
										"That Deliver",
										"That Transform",
										"That Innovate",
										"That Succeed",
									]}
									className=""
									cursorClassName="gradient-text"
								/>
								<svg
									className="absolute -bottom-2 left-0 w-full"
									viewBox="0 0 200 8"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 5.5C47.6667 1.5 154.4 -1.9 199 5.5"
										stroke="url(#paint0_linear)"
										strokeWidth="2"
									/>
									<defs>
										<linearGradient
											id="paint0_linear"
											x1="1"
											y1="5"
											x2="199"
											y2="5"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#4dabf7" />
											<stop
												offset="1"
												stopColor="#228be6"
											/>
										</linearGradient>
									</defs>
								</svg>
							</span>
						</h1>

						<p className="text-xl text-gray-400 mb-10 max-w-xl">
							Tech company specialized in scaling revenue,
							optimizing operational structure and automating
							workflows.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Link href="/contact">
								<Button className="bg-gradient-to-r from-blue to-indigo hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full">
									Get Started
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<a href="#services" className="inline-block">
								<Button
									variant="outline"
									className="border-blue/20 hover:bg-dark-lighter text-white px-8 py-6 text-lg h-auto rounded-full"
									onClick={(e) => {
										e.preventDefault();
										document
											.getElementById("services")
											?.scrollIntoView({
												behavior: "smooth",
											});
									}}
								>
									Our Services
								</Button>
							</a>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="absolute -inset-4 bg-gradient-to-r from-blue/20 to-indigo/20 rounded-2xl blur-xl -z-10"></div>
						<div className="relative rounded-2xl overflow-hidden border border-blue/20 gradient-border glow h-[500px] flex items-center justify-center bg-dark-lighter/30 backdrop-blur-sm">
							<EnhancedAnimatedLogo />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function EnhancedAnimatedLogo() {
	const containerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [shapes, setShapes] = useState<any[]>([]);
	const [connectionLines, setConnectionLines] = useState<any[]>([]);
	const [techWords, setTechWords] = useState<any[]>([]);
	const [pulseIntensity, setPulseIntensity] = useState(1);
	const [rotation, setRotation] = useState({ x: 0, y: 0 });
	const [particles, setParticles] = useState<any[]>([]);
	const [logoScale, setLogoScale] = useState(1);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setMousePosition({ x, y });

		const rotateX = (y - 50) / 10;
		const rotateY = (x - 50) / 10;
		setRotation({ x: rotateX, y: rotateY });
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setPulseIntensity((prev) => {
				const newValue = prev + (Math.random() * 0.4 - 0.2);
				return Math.max(0.8, Math.min(1.2, newValue));
			});
		}, 1000);

		return () => clearInterval(interval);
	}, []);
	useEffect(() => {
		const breatheInterval = setInterval(() => {
			setLogoScale((prev) => {
				return 1 + Math.sin(Date.now() / 2000) * 0.03;
			});
		}, 50);

		return () => clearInterval(breatheInterval);
	}, []);

	useEffect(() => {
		const shapeCount = 30;
		const newShapes = [];

		for (let i = 0; i < shapeCount; i++) {
			newShapes.push({
				id: i,
				type: ["circle", "triangle", "disk", "square"][
					Math.floor(Math.random() * 4)
				],
				size: Math.random() * 10 + 5,
				x: Math.random() * 100 - 50,
				y: Math.random() * 100 - 50,
				z: Math.random() * 50 - 25,
				opacity: Math.random() * 0.5 + 0.2,
				color: ["blue", "indigo", "blue-light", "indigo-light"][
					Math.floor(Math.random() * 4)
				],
				animationDuration: Math.random() * 20 + 10,
				animationDelay: Math.random() * 5,
				blur: Math.random() > 0.5,
				glow: Math.random() > 0.3,
				parallaxFactor: Math.random() * 0.3 + 0.1,
			});
		}

		setShapes(newShapes);

		const lineCount = 12;
		const newLines = [];

		for (let i = 0; i < lineCount; i++) {
			const shape1 = Math.floor(Math.random() * shapeCount);
			let shape2 = Math.floor(Math.random() * shapeCount);

			while (shape2 === shape1) {
				shape2 = Math.floor(Math.random() * shapeCount);
			}

			newLines.push({
				id: i,
				from: shape1,
				to: shape2,
				opacity: Math.random() * 0.3 + 0.1,
				color: ["blue", "indigo", "blue-light"][
					Math.floor(Math.random() * 3)
				],
				animationDuration: Math.random() * 8 + 4,
				animationDelay: Math.random() * 2,
				pulseWidth: Math.random() > 0.5,
			});
		}

		setConnectionLines(newLines);

		const words = [
			"API",
			"Cloud",
			"Data",
			"AI",
			"IoT",
			"SaaS",
			"DevOps",
			"ML",
			"UI/UX",
			"Agile",
		];
		const newWords = [];

		for (let i = 0; i < 8; i++) {
			newWords.push({
				id: i,
				text: words[Math.floor(Math.random() * words.length)],
				x: Math.random() * 80 - 40,
				y: Math.random() * 80 - 40,
				z: Math.random() * 30 - 15,
				opacity: Math.random() * 0.4 + 0.1,
				size: Math.random() * 0.4 + 0.6,
				animationDuration: Math.random() * 15 + 10,
				animationDelay: Math.random() * 5,
				color: ["blue-light", "indigo-light", "text-white/50"][
					Math.floor(Math.random() * 3)
				],
			});
		}

		setTechWords(newWords);

		generateParticles(10);
	}, []);

	const generateParticles = (count: number) => {
		const newParticles: any[] = [];
		for (let i = 0; i < count; i++) {
			newParticles.push({
				id: Date.now() + i,
				x: Math.random() * 100 - 50,
				y: Math.random() * 100 - 50,
				size: Math.random() * 3 + 1,
				color: ["blue", "indigo", "blue-light"][
					Math.floor(Math.random() * 3)
				],
				opacity: Math.random() * 0.5 + 0.3,
				speed: Math.random() * 2 + 1,
				direction: Math.random() * 360,
				life: 100,
			});
		}
		setParticles((prev) => [...prev, ...newParticles]);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setParticles((prev) => {
				const updated = prev
					.map((p) => ({
						...p,
						x:
							p.x +
							Math.cos(p.direction * (Math.PI / 180)) *
								p.speed *
								0.1,
						y:
							p.y +
							Math.sin(p.direction * (Math.PI / 180)) *
								p.speed *
								0.1,
						life: p.life - 1,
						opacity: p.opacity * (p.life / 100),
					}))
					.filter(
						(p) =>
							p.life > 0 &&
							p.x > -60 &&
							p.x < 60 &&
							p.y > -60 &&
							p.y < 60
					);

				if (Math.random() > 0.7) {
					generateParticles(1);
				}

				return updated;
			});
		}, 50);

		return () => clearInterval(interval);
	}, []);

	const [binaryCode, setBinaryCode] = useState("");

	useEffect(() => {
		const generateBinary = () => {
			let code = "";
			for (let i = 0; i < 8; i++) {
				code += Math.round(Math.random()).toString();
			}
			return code;
		};

		const interval = setInterval(() => {
			setBinaryCode(generateBinary());
		}, 500);

		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (!canvasRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const resizeCanvas = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				canvas.width = rect.width;
				canvas.height = rect.height;
			}
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		let animationFrame: number;
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.globalCompositeOperation = "lighter";
			particles.forEach((particle) => {
				const x =
					canvas.width / 2 + ((particle.x / 100) * canvas.width) / 2;
				const y =
					canvas.height / 2 +
					((particle.y / 100) * canvas.height) / 2;

				const gradient = ctx.createRadialGradient(
					x,
					y,
					0,
					x,
					y,
					particle.size * 2
				);
				const color =
					particle.color === "blue"
						? "#4dabf7"
						: particle.color === "indigo"
						? "#5c7cfa"
						: "#228be6";

				gradient.addColorStop(0, `${color}`);
				gradient.addColorStop(1, "rgba(0,0,0,0)");

				ctx.fillStyle = gradient;
				ctx.globalAlpha = particle.opacity;
				ctx.beginPath();
				ctx.arc(x, y, particle.size, 0, Math.PI * 2);
				ctx.fill();
			});

			ctx.globalCompositeOperation = "source-over";
			ctx.globalAlpha = 1;

			animationFrame = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrame);
		};
	}, [particles]);

	const handleLogoClick = () => {
		generateParticles(20);

		setPulseIntensity(1.5);
		setTimeout(() => setPulseIntensity(1), 300);
	};

	return (
		<div
			ref={containerRef}
			className="relative w-full h-full flex items-center justify-center perspective-container overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<canvas
				ref={canvasRef}
				className="absolute inset-0 pointer-events-none z-10"
			/>

			{connectionLines.map((line) => {
				const fromShape = shapes[line.from];
				const toShape = shapes[line.to];

				if (!fromShape || !toShape) return null;

				return (
					<div
						key={`line-${line.id}`}
						className="absolute pointer-events-none"
						style={{
							left: `calc(50% + ${fromShape.x}%)`,
							top: `calc(50% + ${fromShape.y}%)`,
							width: "1px",
							height: "100px",
							backgroundColor: `var(--${line.color})`,
							opacity: line.opacity * (isHovering ? 1.5 : 1),
							transformOrigin: "top left",
							animation: `${
								line.pulseWidth
									? "pulse-width"
									: "pulse-opacity"
							} ${line.animationDuration}s infinite alternate ${
								line.animationDelay
							}s`,
							zIndex: 5,
							transform: `
                rotate(${Math.atan2(
					toShape.y - fromShape.y,
					toShape.x - fromShape.x
				)}rad)
                scaleY(${
					Math.sqrt(
						Math.pow(toShape.x - fromShape.x, 2) +
							Math.pow(toShape.y - fromShape.y, 2)
					) / 100
				}
              `,
						}}
					/>
				);
			})}

			{techWords.map((word) => (
				<div
					key={`word-${word.id}`}
					className={`absolute text-${word.color} font-mono text-opacity-50 pointer-events-none animate-float-random`}
					style={{
						left: `calc(50% + ${
							word.x +
							(isHovering
								? (mousePosition.x - 50) * word.z * 0.01
								: 0)
						}%)`,
						top: `calc(50% + ${
							word.y +
							(isHovering
								? (mousePosition.y - 50) * word.z * 0.01
								: 0)
						}%)`,
						opacity: word.opacity * (isHovering ? 1.3 : 1),
						fontSize: `${word.size * 0.8}rem`,
						animationDuration: `${word.animationDuration}s`,
						animationDelay: `${word.animationDelay}s`,
						transform: `translate(-50%, -50%) translateZ(${word.z}px)`,
						zIndex: word.z > 0 ? 15 : 5,
						textShadow: `0 0 5px var(--${
							word.color === "text-white/50"
								? "blue"
								: word.color.split("-")[0]
						})`,
					}}
				>
					{word.text}
				</div>
			))}

			<div className="absolute bottom-6 left-6 font-mono text-blue-light/40 text-xs animate-pulse">
				{binaryCode}
			</div>

			<div className="absolute top-8 right-8 text-blue-light/40 animate-float">
				<Code size={20} className="filter drop-shadow-glow-blue" />
			</div>
			<div
				className="absolute bottom-8 left-20 text-indigo-light/40 animate-float"
				style={{ animationDelay: "1.5s" }}
			>
				<Database
					size={18}
					className="filter drop-shadow-glow-indigo"
				/>
			</div>
			<div
				className="absolute top-20 left-8 text-blue/40 animate-float"
				style={{ animationDelay: "0.8s" }}
			>
				<Zap size={16} className="filter drop-shadow-glow-blue" />
			</div>

			{shapes.map((shape) => (
				<div
					key={shape.id}
					className={`
            absolute
            ${shape.type === "circle" ? "rounded-full" : ""}
            ${shape.type === "triangle" ? "triangle" : ""}
            ${shape.type === "square" ? "rounded-sm" : ""}
            ${shape.type === "disk" ? "rounded-full" : ""}
            ${shape.blur ? "blur-sm" : ""}
            ${shape.glow ? "glow-sm" : ""}
            animate-float-random
            transition-transform duration-200 ease-out
          `}
					style={{
						width: `${shape.size}px`,
						height: `${shape.size}px`,
						left: `calc(50% + ${
							shape.x +
							(isHovering
								? (mousePosition.x - 50) * shape.parallaxFactor
								: 0)
						}%)`,
						top: `calc(50% + ${
							shape.y +
							(isHovering
								? (mousePosition.y - 50) * shape.parallaxFactor
								: 0)
						}%)`,
						opacity: shape.opacity * (isHovering ? 1.2 : 1),
						backgroundColor:
							shape.type === "triangle"
								? "transparent"
								: `var(--${shape.color})`,
						borderColor:
							shape.type === "triangle"
								? `var(--${shape.color})`
								: "transparent",
						borderWidth: shape.type === "triangle" ? "2px" : "0",
						boxShadow: shape.glow
							? `0 0 15px var(--${shape.color})`
							: "none",
						animationDuration: `${shape.animationDuration}s`,
						animationDelay: `${shape.animationDelay}s`,
						transform: `
              ${shape.type === "triangle" ? "rotate(45deg)" : ""}
              translateZ(${shape.z}px)
            `,
						zIndex: shape.z > 0 ? 15 : 5,
					}}
				/>
			))}

			<div className="absolute w-64 h-64 border border-blue-light/20 rounded-full animate-spin-slow"></div>
			<div className="absolute w-72 h-72 border border-indigo/10 rounded-full animate-reverse-spin"></div>
			<div
				className="absolute w-80 h-80 border-2 border-dashed border-blue/5 rounded-full animate-spin-slow"
				style={{ animationDuration: "30s" }}
			></div>

			<div
				className="relative animate-float z-20 cursor-pointer transition-transform duration-300 ease-out"
				style={{
					transform: `
            scale(${logoScale}) 
            ${
				isHovering
					? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
					: ""
			}
          `,
					transformStyle: "preserve-3d",
				}}
				onClick={handleLogoClick}
			>
				<div className="absolute -inset-4 border border-blue-light/30 rounded-full animate-ping-slow opacity-30"></div>
				<div
					className="absolute -inset-8 border border-indigo/20 rounded-full animate-ping-slow opacity-20"
					style={{ animationDelay: "1s" }}
				></div>
				<div
					className="absolute -inset-12 border border-blue/10 rounded-full animate-ping-slow opacity-10"
					style={{ animationDelay: "2s" }}
				></div>

				<div className="relative">
					<div
						className="absolute -inset-16 bg-gradient-to-r from-blue/40 to-indigo/40 rounded-full blur-2xl"
						style={{
							opacity: 0.7 * pulseIntensity,
							transform: `scale(${pulseIntensity})`,
							transition:
								"transform 1s ease-in-out, opacity 1s ease-in-out",
						}}
					></div>

					<div className="relative w-48 h-48 flex items-center justify-center">
						<Image
							src="jt.webp"
							alt="JusTech Logo"
							width={150}
							height={150}
							className="object-contain drop-shadow-lg"
							style={{
								filter: "drop-shadow(0 0 10px rgba(66, 153, 225, 0.5))",
								transform: isHovering
									? "translateZ(40px)"
									: "translateZ(0)",
								transition: "transform 0.3s ease-out",
							}}
						/>
					</div>
				</div>
			</div>

			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div className="relative w-0 h-0">
					{Array.from({ length: 12 }).map((_, i) => (
						<div
							key={i}
							className="absolute w-1 h-1 bg-blue-light rounded-full animate-particle-burst"
							style={{
								animationDelay: `${i * 0.2}s`,
								transform: `rotate(${
									i * 30
								}deg) translateY(-60px)`,
								boxShadow: "0 0 5px rgba(77, 171, 247, 0.8)",
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
