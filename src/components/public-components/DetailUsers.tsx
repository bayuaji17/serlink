"use client";

import { useUsers } from "@/app/hooks/useUsers";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Instagram } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export default function DetailUsers({ id }: { id: string }) {
  const { data, isLoading, isError } = useUsers(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>User not found.</div>;

  return (
    <div>
      {/* Avatar */}
      <div className="flex flex-col items-center mt-4 py-5 rounded-lg space-y-2 border-2 border-black">
        <Avatar className="size-28">
          <AvatarImage src={data.data?.users.avatarUrl} />
          <AvatarFallback className="text-3xl font-bold bg-cyan-700">
            {data.data?.users.name?.[0] ?? "?"}
          </AvatarFallback>
        </Avatar>
        {/* UserName */}
        <span className="text-xl font-semibold">
          @{data.data?.users.username}
        </span>
        {/* Name */}
        <span className="text-base">{data.data?.users.name}</span>
        {/* Bio */}
        <p className="text-center text-sm">{data.data?.users.bio}</p>
        {/* Social Icons */}
        <div className="flex gap-x-2">
          {data.data?.users.socialLinks?.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="flex flex-col space-y-2 mt-4">
        {data.data?.users.products.map((product) => (
          <Card key={product.id} className="border-black border-2">
            <CardContent className="flex gap-x-2 items-center justify-between">
              <Image src={product.coverImage} alt="" width={50} height={50} />
              {/* Product Name */}
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-sm line-clamp-2 text-center">
                  {product.description}
                </p>
              </div>
              {/* Price */}
              <span>Rp{product.price}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
