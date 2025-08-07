import { Hono } from "hono";

export const usersRouter = new Hono();

// GET /api/users
usersRouter.get("/", async (c) => {
  // get all users
  return c.json([{ id: 1, name: "Alice" }]);
});

// GET /api/users/:id
usersRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  return c.json({
    success: true,
    message: "Users retrieved successfully",
    data: {
      users: {
        id: id,
        username: "digitalcreator",
        name: "Digital Creator",
        bio: "Menjual desain landing page, template social media, dan eBook untuk UMKM.",
        avatarUrl: "https://github.com/shadcn.png",
        socialLinks: [
          {
            platform: "Instagram",
            url: "https://github.com/shadcn.png",
          },
          {
            platform: "YouTube",
            url: "https://github.com/bayuaji17.png",
          },
        ],
        products: [
          {
            id: "prod_001",
            title: "Landing Page Murah",
            slug: "landing-page-murah",
            description:
              "Template landing page responsif untuk promosi produk UMKM.",
            price: 50000,
            coverImage: "https://github.com/bayuaji17.png",
            isPublished: true,
          },
          {
            id: "prod_002",
            title: "Landing Page Murah part 2",
            slug: "landing-page-murah-part-2",
            description:
              "Template landing page responsif untuk promosi produk UMKM.",
            price: 60000,
            coverImage: "https://github.com/bayuaji17.png",
            isPublished: true,
          },
        ],
      },
    },
    meta: {
      timestamp: "2024-01-25T12:00:00Z",
    },
  });
});
