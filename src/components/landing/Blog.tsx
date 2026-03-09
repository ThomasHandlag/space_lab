import { ArrowUpRight, Calendar, User } from "lucide-react";

const posts = [
  {
    category: "UI/ UX Design",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    author: "Jayesh Patil",
    date: "10 Nov, 2023",
    gradient: "from-primary to-[#7B61FF]",
  },
  {
    category: "App Design",
    title: "Sugee: Loan Management System for Rural Sector.",
    author: "Jayesh Patil",
    date: "09 Oct, 2023",
    gradient: "from-[#ff6b6b] to-[#ff8e8e]",
  },
  {
    category: "App Design",
    title: "Cinetrade: Innovative way to invest in Digital Media",
    author: "Jayesh Patil",
    date: "13 Aug, 2023",
    gradient: "from-[#fbbf24] to-[#f59e0b]",
  },
];

export default function Blog() {
  return (
    <section className="py-24 bg-l-bg relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold text-l-heading">
            From my <span className="text-primary">blog post</span>
          </h2>
          <a
            href="#"
            className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
          >
            See All <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div
              key={i}
              className="group rounded-3xl overflow-hidden border border-l-card-border bg-l-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image placeholder */}
              <div
                className={`h-48 bg-linear-to-br ${post.gradient} flex items-center justify-center`}
              >
                <span className="text-white/50 text-sm">{post.category}</span>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-l-heading mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-l-muted text-xs">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
