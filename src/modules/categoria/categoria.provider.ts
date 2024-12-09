import { DataSource } from "typeorm";
import { Categoria } from "./entities/categoria.entity";
import { Injectable } from "@nestjs/common";

// Proveedor para inyectar el repositorio de Categoria
export const CategoriaProviders = [
  {
    provide: "CATEGORIA_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ["DATABASE_CONNECTION"], // Aquí usamos "inject" para inyectar DATABASE_CONNECTION
  },
];
