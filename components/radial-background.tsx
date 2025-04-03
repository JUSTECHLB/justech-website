export default function RadialBackground() {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-20"
				style={{
					background:
						"radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(16, 24, 39, 0) 70%)",
				}}
			/>

			<div
				className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-15"
				style={{
					background:
						"radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 24, 39, 0) 70%)",
				}}
			/>

			<div
				className="absolute inset-0 opacity-[0.03]"
				style={{
					backgroundImage:
						"linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>
		</div>
	);
}
