import Image from "next/image";

interface CircularImageProps {
	src: string;
	alt: string;
	size?: number;
	className?: string;
}

export default function CircularImage({
	src,
	alt,
	size = 80,
	className = "",
}: CircularImageProps) {
	return (
		<div
			className={`relative rounded-full overflow-hidden ${className}`}
			style={{ width: size, height: size }}
		>
			<Image src={src} alt={alt} fill className="object-cover" />
		</div>
	);
}
