# Frontend Architecture - Usuario Admin

Este frontend queda limitado a la experiencia del Usuario Admin de VIA.

La experiencia agricola fue separada en:

```text
C:\Users\fmall\Downloads\Prototipo web AgroDesicions
```

## Capas por feature

- `domain`: tipos, entidades y reglas propias del contexto.
- `application`: casos de uso, puertos y orquestacion.
- `infrastructure`: adaptadores API y mocks temporales.
- `presentation`: paginas, componentes y estado de UI.

## Contextos actuales

- `auth`: autenticacion y sesion.
- `admin`: panel tecnico, rulebooks, documentos RAG, validaciones y configuracion.

## Shared

`shared` contiene UI reutilizable, estilos y el cliente HTTP transversal.

## Regla de separacion

Este repo no debe incorporar el flujo agricola de parcelas, evaluaciones, resultados o reportes. Ese alcance pertenece al frontend agricola.

Mientras backend termina de estabilizar endpoints de rulebooks/documentos, los datos administrativos permanecen en `features/admin/infrastructure/mock`.
