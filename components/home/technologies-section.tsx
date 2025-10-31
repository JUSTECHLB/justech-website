import CardHoverEffect from "@/components/card-hover-effect"

export default function TechnologiesSection() {
  const technologies = [
    {
      title: "Laravel",
      description: "PHP Framework",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
      index: 0,
    },
    {
      title: "AWS",
      description: "Cloud Services",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
      index: 1,
    },
    {
      title: "Shopify",
      description: "E-commerce",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png",
      index: 2,
    },
    {
      title: "WordPress",
      description: "CMS Platform",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
      index: 3,
    },
    {
      title: "Odoo",
      description: "Business Management",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Odoo_logo_rgb.svg/2560px-Odoo_logo_rgb.svg.png",
      index: 4,
    },
    {
      title: "PHP",
      description: "Programming Language",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      index: 5,
    },
  ]

  return (
    <section className="py-24 relative bg-dark-lighter">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technologies & <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional results for our clients.
          </p>
        </div>

        <CardHoverEffect items={technologies} wrapperClasses="bg-gradient-to-br from-blue/10 to-indigo/20" />
      </div>
    </section>
  )
}

