import { ImageResponse } from "next/og";

export const alt =
	"JUSTECH: software engineering for businesses in Lebanon and MENA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time so there is no static asset to keep in sync with the
 * copy. Pages that want their own card can add their own opengraph-image file.
 */
export default function OpengraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					background: "#0a0b0e",
					padding: "80px",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: -200,
						right: -160,
						width: 700,
						height: 700,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(34,139,230,0.35) 0%, rgba(10,11,14,0) 70%)",
					}}
				/>
				<div
					style={{
						position: "absolute",
						bottom: -260,
						left: -180,
						width: 640,
						height: 640,
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(92,124,250,0.28) 0%, rgba(10,11,14,0) 70%)",
					}}
				/>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						fontSize: 34,
						fontWeight: 700,
						color: "#ffffff",
						letterSpacing: "0.06em",
					}}
				>
					JUSTECH
				</div>

				<div style={{ display: "flex", flexDirection: "column" }}>
					<div
						style={{
							display: "flex",
							fontSize: 68,
							fontWeight: 700,
							color: "#ffffff",
							lineHeight: 1.12,
							letterSpacing: "-0.02em",
							maxWidth: 940,
						}}
					>
						Software that moves the number you care about.
					</div>
					<div
						style={{
							display: "flex",
							marginTop: 28,
							fontSize: 30,
							color: "#9ca3af",
							maxWidth: 900,
						}}
					>
						Software engineers in Beirut, working across Lebanon and
						MENA since 2019.
					</div>
				</div>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 20,
						fontSize: 24,
						color: "#4dabf7",
					}}
				>
					<div style={{ display: "flex" }}>Revenue scaling</div>
					<div style={{ display: "flex", color: "#374151" }}>/</div>
					<div style={{ display: "flex" }}>Operations</div>
					<div style={{ display: "flex", color: "#374151" }}>/</div>
					<div style={{ display: "flex" }}>Tech transformation</div>
				</div>
			</div>
		),
		size
	);
}
