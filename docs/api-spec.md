## 2. GET /api/users/:id (Get Users Detail)

### Success Response (200 OK)

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": {
    "users": {
      "id": "id",
      "username": "digitalcreator",
      "name": "Digital Creator",
      "bio": "Menjual desain landing page, template social media, dan eBook untuk UMKM.",
      "avatarUrl": "https://github.com/shadcn.png",
      "socialLinks": [
        {
          "platform": "Instagram",
          "url": "https://github.com/shadcn.png"
        },
        {
          "platform": "YouTube",
          "url": "https://github.com/bayuaji17.png"
        }
      ],
      "products": [
        {
          "id": "prod_001",
          "title": "Landing Page Murah",
          "slug": "landing-page-murah",
          "description": "Template landing page responsif untuk promosi produk UMKM.",
          "price": 50000,
          "coverImage": "https://example.com/images/landing-page.jpg",
          "isPublished": true
        }
      ]
    }
  },
  "meta": {
    "timestamp": "2024-01-25T12:00:00Z",
  }
}
```

### Not Found Response (404 Not Found)

```json
{
  "success": false,
  "message": "Product not found",
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "details": "Product with ID 999 does not exist"
  },
  "meta": {
    "timestamp": "2024-01-25T12:00:00Z",
    "request_id": "req_123456793"
  }
}
```

### Invalid ID Format Response (400 Bad Request)

```json
{
  "success": false,
  "message": "Invalid product ID format",
  "error": {
    "code": "INVALID_ID_FORMAT",
    "details": "Product ID must be a positive integer"
  },
  "meta": {
    "timestamp": "2024-01-25T12:00:00Z",
    "request_id": "req_123456794"
  }
}
```
