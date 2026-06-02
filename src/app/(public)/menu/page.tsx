import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Menu - Hindu Swad",
  description: "Explore our menu of authentic South Indian cuisine. From crispy dosas to fluffy idlis, taste the tradition with Hindu Swad.",
};

const menuCategories = [
  {
    category: "Breakfast Classics",
    items: [
      { name: "Thatte Idli (2 Pcs)", description: "Soft, plate-sized idlis served with coconut chutney and sambar.", price: "₹60" },
      { name: "Medu Vada (2 Pcs)", description: "Crispy, golden-fried lentil doughnuts with a soft center.", price: "₹50" },
      { name: "Benne Masala Dosa", description: "Crispy dosa roasted in rich butter, stuffed with spiced potato mash.", price: "₹120" },
      { name: "Podi Dosa", description: "Thin rice crepe coated with spicy, flavorful gunpowder (podi) and ghee.", price: "₹90" },
    ]
  },
  {
    category: "South Indian Mains",
    description: "Served from 11:30 AM onwards",
    items: [
      { name: "Bisi Bele Bath", description: "Traditional Karnataka dish made of rice, lentils, vegetables, and aromatic spices.", price: "₹110" },
      { name: "South Indian Thali", description: "A wholesome meal with rice, sambar, rasam, 2 vegetable curries, papad, and sweet.", price: "₹180" },
      { name: "Curd Rice", description: "Soothing yogurt rice tempered with mustard seeds, curry leaves, and pomegranate.", price: "₹80" },
    ]
  },
  {
    category: "Beverages",
    items: [
      { name: "Authentic Filter Coffee", description: "Strong, frothy South Indian filter coffee brewed to perfection.", price: "₹35" },
      { name: "Masala Majjige (Buttermilk)", description: "Cooling spiced buttermilk with coriander and green chilies.", price: "₹40" },
    ]
  }
];

export default function SampleMenuPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="warm-bg py-16 sm:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <span className="badge-soon mb-4 mx-auto w-fit">Sample Menu</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-950 mb-4 leading-tight">
            A Taste of <span className="text-orange-600">Tradition</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Discover the rich flavors of authentic South Indian cuisine. This is a sample menu showcasing the kind of premium culinary experiences you can expect from our partners.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-16">
            {menuCategories.map((cat, idx) => (
              <div key={idx} className="animate-fade-up" style={{ animationDelay: `${idx * 150}ms`, opacity: 0, animationFillMode: "forwards" }}>
                <div className="mb-8 border-b-2 border-orange-100 pb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 font-display">{cat.category}</h2>
                  {cat.description && (
                    <p className="text-sm text-zinc-500 mt-1 uppercase tracking-wider font-medium">{cat.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-x-12 sm:gap-y-10">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <div className="flex justify-between items-baseline mb-2 gap-4">
                        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex-1 border-b border-dashed border-zinc-200 mx-2 relative -top-1 hidden sm:block"></div>
                        <span className="text-lg font-black text-orange-600 shrink-0">{item.price}</span>
                      </div>
                      <p className="text-sm text-zinc-500 leading-relaxed pr-8">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-2xl bg-orange-50 border border-orange-100 text-center animate-fade-up" style={{ animationDelay: "600ms", opacity: 0, animationFillMode: "forwards" }}>
            <p className="text-sm text-orange-800 font-medium leading-relaxed">
              * Note: The prices and availability shown above are for illustrative purposes only. Actual partner restaurant menus may vary. Taxes extra as applicable.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
