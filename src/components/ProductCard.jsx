"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Plus, Trash2, Check } from "lucide-react";

export default function ProductCard({
  producto,
  cantidad = 0,
  moneda = "S/",
  onAgregar,
  onEliminar,
  onToggleFavorito,
  esFavorito = false,
}) {
  const [hovered, setHovered] = useState(false);

  const estaEnCarrito = cantidad > 0;

  const {
    id,
    nombre,
    precio,
    categoria,
    imagen,
    imagenHover,
    color,
    talla,
    badge,
  } = producto;

  const coloresTexto = Array.isArray(color)
    ? color.join(" • ")
    : color;

  const tallasTexto = Array.isArray(talla)
    ? talla.join(" / ")
    : talla;

  return (
    <article
      className="group relative flex w-full flex-col bg-white select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGEN */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100">
        <Image
          src={hovered && imagenHover ? imagenHover : imagen}
          alt={nombre}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
      {badge && (
       <span className={`absolute left-3 top-3 z-10 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-sm ${
         badge.toUpperCase() === "OFERTA"
          ? "bg-red-600/95"
          : "bg-black/80"
         }`}
        >
        {badge}
       </span>
      )}

        {/* Cantidad en carrito */}
        {estaEnCarrito && (
          <span className="absolute right-12 top-3 z-10 flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1.5 text-[10px] font-bold text-white shadow-sm">
            <Check size={12} />
            {cantidad}
          </span>
        )}

       

        {/* Acción rápida */}
        <div className="absolute inset-x-0 bottom-0 flex justify-end bg-linel-to-t from-black/40 to-transparent p-3 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
          {estaEnCarrito ? (
            <button
              type="button"
              onClick={() => onEliminar(id)}
              className="flex items-center gap-1.5 bg-red-600/90 px-3.5 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-red-600"
            >
              <Trash2 size={13} />
              <span>Quitar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onAgregar(producto)}
              className="flex items-center gap-1.5 bg-white/95 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black backdrop-blur-md transition-all hover:bg-lila-jomi hover:text-white"
            >
              <Plus size={13} />
              <span>Agregar</span>
            </button>
          )}
        </div>
      </div>

      {/* INFORMACIÓN */}
      <div className="flex min-h-33 flex-col gap-1.5 px-1 pt-4 pb-3">
        

        {/* Nombre */}
        <h3 className="line-clamp-2 min-h-10 text-sm font-medium uppercase leading-5 tracking-wide text-black">
          {nombre}
        </h3>

        {/* Color / Talla */}
        <div className="flex min-h-4.5 items-center justify-between gap-2 text-s font-light text-gray-500">
          <span className="truncate">
            {coloresTexto || ""}
          </span>

          {tallasTexto && (
            <span className="shrink-0 uppercase">
              {tallasTexto}
            </span>
          )}
        </div>

        {/* Precio */}
        <div className="mt-auto flex items-baseline gap-2 pt-2">
          <span className="text-base font-bold tracking-tight text-gray-900">
            {moneda} {Number(precio).toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
}