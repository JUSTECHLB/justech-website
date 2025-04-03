"use client";

import React from "react";
import {
	Users,
	Send,
	ArrowDownToLine,
	Database,
	Mail,
	Phone,
	MessageSquare,
	Globe,
	ShoppingCart,
	Calendar,
	BarChart3,
	PieChart,
	UserCheck,
	Target,
	TrendingUp,
	Megaphone,
	Share2,
	Search,
	Briefcase,
	Building,
	Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function ImplementationProcess() {
	const [activeStep, setActiveStep] = useState(0);
	const [direction, setDirection] = useState(0); // -1 for left, 1 for right, 0 for initial
	const [progressStyle, setProgressStyle] = useState({
		width: "0%",
		left: "0%",
	});
	const [backgroundLineStyle, setBackgroundLineStyle] = useState({
		width: "0%",
		left: "0%",
	});
	const stepsContainerRef = useRef(null);
	const stepRefs = useRef([]);

	useEffect(() => {
		stepRefs.current = stepRefs.current.slice(0, processSteps.length);
	}, []);

	useEffect(() => {
		if (
			stepsContainerRef.current &&
			stepRefs.current.length === processSteps.length
		) {
			requestAnimationFrame(() => {
				const container = stepsContainerRef.current;
				const containerRect = container.getBoundingClientRect();

				const firstStepRect =
					stepRefs.current[0].getBoundingClientRect();
				const lastStepRect =
					stepRefs.current[
						processSteps.length - 1
					].getBoundingClientRect();

				const startPos =
					firstStepRect.left +
					firstStepRect.width / 2 -
					containerRect.left;

				const endPos =
					lastStepRect.left +
					lastStepRect.width / 2 -
					containerRect.left;

				const totalLength = endPos - startPos;

				setBackgroundLineStyle({
					width: `${totalLength}px`,
					left: `${startPos}px`,
				});

				if (activeStep === 0) {
					setProgressStyle({
						width: "0%",
						left: `${startPos}px`,
					});
					return;
				}

				if (activeStep === processSteps.length - 1) {
					setProgressStyle({
						width: `${totalLength}px`,
						left: `${startPos}px`,
					});
					return;
				}

				const currentStepRect =
					stepRefs.current[activeStep].getBoundingClientRect();
				const currentPos =
					currentStepRect.left +
					currentStepRect.width / 2 -
					containerRect.left;
				const currentWidth = currentPos - startPos;

				setProgressStyle({
					width: `${currentWidth}px`,
					left: `${startPos}px`,
				});
			});
		}
	}, [activeStep]);

	useEffect(() => {
		const handleResize = () => {
			setActiveStep((prevStep) => prevStep);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (
				e.key === "ArrowRight" &&
				activeStep < processSteps.length - 1
			) {
				setDirection(1);
				setActiveStep((prev) => prev + 1);
			} else if (e.key === "ArrowLeft" && activeStep > 0) {
				setDirection(-1);
				setActiveStep((prev) => prev - 1);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeStep]);

	const handleStepChange = (newStep) => {
		if (newStep !== activeStep) {
			setDirection(newStep > activeStep ? 1 : -1);
			setActiveStep(newStep);
		}
	};

	const processSteps = [
		{
			icon: <Users className="w-8 h-8 text-blue-light" />,
			title: "Prospecting",
			description:
				"Stage where we establish two sections: who is your ideal client and what is the most efficient way to reach this client.",
			segments: [
				"Email Marketing",
				"Social Media",
				"Third Party Prospecting",
				"Direct Outreach",
			],
			tools: [
				{
					name: "Apollo",
					icon: <Search className="w-8 h-8 text-blue" />,
				},
				{
					name: "Lusha",
					icon: <UserCheck className="w-8 h-8 text-blue" />,
				},
				{
					name: "Outbase",
					icon: <Target className="w-8 h-8 text-blue" />,
				},
				{ name: "Email", icon: <Mail className="w-8 h-8 text-blue" /> },
				{
					name: "Phone",
					icon: <Phone className="w-8 h-8 text-blue" />,
				},
			],
		},
		{
			icon: <Send className="w-8 h-8 text-blue-light" />,
			title: "Outreach and Accelerate",
			description:
				"Stage at which we establish and activate the right communication channels to reach our ideal prospects.",
			segments: [
				"Email Marketing",
				"Social Media",
				"PPC Campaigns",
				"Content Marketing",
			],
			tools: [
				{
					name: "SendGrid",
					icon: <Mail className="w-8 h-8 text-blue" />,
				},
				{
					name: "Brevo",
					icon: <Megaphone className="w-8 h-8 text-blue" />,
				},
				{
					name: "Google Ads",
					icon: <TrendingUp className="w-8 h-8 text-blue" />,
				},
				{
					name: "WhatsApp",
					icon: <MessageSquare className="w-8 h-8 text-blue" />,
				},
				{
					name: "Social",
					icon: <Share2 className="w-8 h-8 text-blue" />,
				},
			],
		},
		{
			icon: <ArrowDownToLine className="w-8 h-8 text-blue-light" />,
			title: "Conversion Mediums",
			description:
				"Mediums in which prospects will land and convert into a call, inquiry, purchase, etc.",
			segments: [
				"Landing Pages",
				"E-commerce Platforms",
				"Booking Systems",
				"Contact Forms",
			],
			tools: [
				{
					name: "WhatsApp",
					icon: <MessageSquare className="w-8 h-8 text-blue" />,
				},
				{
					name: "WordPress",
					icon: <Globe className="w-8 h-8 text-blue" />,
				},
				{
					name: "Shopify",
					icon: <ShoppingCart className="w-8 h-8 text-blue" />,
				},
				{
					name: "WooCommerce",
					icon: <Layers className="w-8 h-8 text-blue" />,
				},
				{
					name: "Calendly",
					icon: <Calendar className="w-8 h-8 text-blue" />,
				},
			],
		},
		{
			icon: <Database className="w-8 h-8 text-blue-light" />,
			title: "CRM",
			description:
				"CRM is how the company will manage and acquire and receive these leads in a quick and traceable efficient way and store these contacts for the future.",
			segments: [
				"Lead Management",
				"Contact Organization",
				"Sales Pipeline Tracking",
				"Customer Communication",
			],
			tools: [
				{
					name: "Zoho CRM",
					icon: <Briefcase className="w-8 h-8 text-blue" />,
				},
				{
					name: "HubSpot",
					icon: <Building className="w-8 h-8 text-blue" />,
				},
				{
					name: "Email CRM",
					icon: <Mail className="w-8 h-8 text-blue" />,
				},
				{
					name: "Analytics",
					icon: <BarChart3 className="w-8 h-8 text-blue" />,
				},
				{
					name: "Reports",
					icon: <PieChart className="w-8 h-8 text-blue" />,
				},
			],
		},
	];

	const containerVariants = {
		enter: (direction) => ({
			x: direction > 0 ? 100 : -100,
			opacity: 0,
			scale: 0.95,
			rotateY: direction > 0 ? 5 : -5,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.5 },
				scale: { duration: 0.5 },
				rotateY: { duration: 0.5 },
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
		exit: (direction) => ({
			x: direction > 0 ? -100 : 100,
			opacity: 0,
			scale: 0.95,
			rotateY: direction > 0 ? -5 : 5,
			transition: {
				x: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.5 },
				scale: { duration: 0.5 },
				rotateY: { duration: 0.5 },
				when: "afterChildren",
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		}),
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const iconVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 25,
				delay: 0.2,
			},
		},
		exit: {
			scale: 0.8,
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const segmentVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.3 + i * 0.1,
				duration: 0.4,
			},
		}),
		exit: (i) => ({
			opacity: 0,
			x: -5,
			transition: {
				delay: i * 0.05,
				duration: 0.2,
			},
		}),
	};

	const toolVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.9 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20,
				delay: 0.4 + i * 0.1,
			},
		}),
		exit: (i) => ({
			opacity: 0,
			y: -10,
			scale: 0.9,
			transition: {
				delay: i * 0.05,
				duration: 0.2,
				ease: "easeOut",
			},
		}),
	};

	return (
		<section className="relative py-32">
			<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo/10 to-blue/5 rounded-full blur-[180px] -z-10"></div>
			<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue/5 to-transparent rounded-full blur-[120px] -z-10"></div>

			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="text-center mb-16"
				>
					<div className="mb-4 inline-block">
						<span className="px-5 py-2 bg-gradient-to-r from-blue/20 to-indigo/10 rounded-full text-blue-light text-sm font-medium border border-blue/10 shadow-sm">
							Execution Framework
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
						<span className="gradient-text">Implementation</span>{" "}
						Process
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
						Our systematic approach to implementing revenue scaling
						strategies ensures consistent results and sustainable
						growth.
					</p>
				</motion.div>

				<div className="bg-gradient-to-br from-dark-lighter/50 to-dark/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden">
					<div className="relative">
						<div
							className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2"
							style={{ zIndex: 0 }}
						>
							<div
								className="absolute top-0 h-0.5 bg-gray-700/50"
								style={{
									width: backgroundLineStyle.width,
									left: backgroundLineStyle.left,
									transition:
										"width 0.6s cubic-bezier(0.4, 0, 0.2, 1), left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
								}}
							></div>

							<div
								className="absolute top-0 h-0.5 bg-gradient-to-r from-blue via-indigo to-blue-light"
								style={{
									width: progressStyle.width,
									left: progressStyle.left,
									transition:
										"width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
								}}
							></div>
						</div>

						<div
							ref={stepsContainerRef}
							className="flex justify-between px-4 py-8 relative"
							style={{ zIndex: 1 }}
						>
							{processSteps.map((step, index) => (
								<button
									key={index}
									ref={(el) => (stepRefs.current[index] = el)}
									onClick={() => handleStepChange(index)}
									className="flex flex-col items-center relative"
								>
									<div
										className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-500 ${
											activeStep === index
												? "bg-gradient-to-r from-blue to-indigo text-white shadow-lg shadow-blue/20"
												: index < activeStep
												? "bg-[#172c42] text-blue-light"
												: "bg-dark-lighter text-gray-400"
										}`}
									>
										{React.cloneElement(
											step.icon as React.ReactElement,
											{
												className: "w-8 h-8",
											}
										)}
									</div>
									<span
										className={`text-sm font-medium ${
											activeStep === index
												? "text-white"
												: "text-gray-400"
										}`}
									>
										{step.title}
									</span>
								</button>
							))}
						</div>
					</div>

					<div className="p-8 md:p-12 border-t border-white/10 overflow-hidden">
						<div
							className="relative"
							style={{
								perspective: "1200px",
								height: "auto",
								minHeight: "500px",
							}}
						>
							<AnimatePresence
								initial={false}
								custom={direction}
								mode="wait"
							>
								<motion.div
									key={activeStep}
									custom={direction}
									variants={containerVariants}
									initial="enter"
									animate="center"
									exit="exit"
									className="w-full"
									style={{
										position: "relative",
										transformStyle: "preserve-3d",
										backfaceVisibility: "hidden",
									}}
								>
									<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
										<div>
											<motion.div
												className="flex items-center gap-4 mb-6"
												variants={itemVariants}
											>
												<motion.div
													className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue/20 to-blue/5 flex items-center justify-center border border-white/5"
													variants={iconVariants}
												>
													{
														processSteps[activeStep]
															.icon
													}
												</motion.div>
												<div>
													<motion.span
														className="text-blue-light text-sm font-medium"
														variants={itemVariants}
													>
														Step {activeStep + 1}
													</motion.span>
													<motion.h3
														className="text-2xl font-bold text-white"
														variants={itemVariants}
													>
														{
															processSteps[
																activeStep
															].title
														}
													</motion.h3>
												</div>
											</motion.div>

											<motion.p
												className="text-gray-300 text-lg leading-relaxed mb-8"
												variants={itemVariants}
											>
												{
													processSteps[activeStep]
														.description
												}
											</motion.p>

											<motion.div
												className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/5"
												variants={itemVariants}
											>
												<motion.h4
													className="text-xl font-semibold mb-4 text-white/90"
													variants={itemVariants}
												>
													Main Segments
												</motion.h4>
												<div className="grid grid-cols-2 gap-4">
													{processSteps[
														activeStep
													].segments.map(
														(segment, idx) => (
															<motion.div
																key={idx}
																custom={idx}
																variants={
																	segmentVariants
																}
																className="flex items-center gap-3"
															>
																<div className="w-2 h-2 rounded-full bg-blue"></div>
																<span className="text-gray-300">
																	{segment}
																</span>
															</motion.div>
														)
													)}
												</div>
											</motion.div>
										</div>

										<div>
											<motion.h4
												className="text-xl font-semibold mb-6 text-white/90"
												variants={itemVariants}
											>
												Tools We Leverage
											</motion.h4>
											<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
												{processSteps[
													activeStep
												].tools.map((tool, idx) => (
													<motion.div
														key={idx}
														custom={idx}
														variants={toolVariants}
														className="bg-dark/30 backdrop-blur-sm rounded-xl p-4 border border-white/5 flex flex-col items-center text-center group hover:bg-dark/50 transition-all duration-300"
														whileHover={{
															y: -5,
															scale: 1.03,
															transition: {
																duration: 0.2,
															},
														}}
													>
														<div className="w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center mb-3 shadow-md transition-transform duration-300 group-hover:scale-110">
															{tool.icon}
														</div>
														<span className="text-sm text-gray-400 group-hover:text-blue-light transition-colors duration-300">
															{tool.name}
														</span>
													</motion.div>
												))}
											</div>
										</div>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
