# VIA Admin Frontend

Frontend React para el usuario administrador/tecnico de VIA. Esta aplicacion queda enfocada en operaciones de administracion: rulebooks, documentos RAG, validaciones e indicadores tecnicos.

La app agricola esta en:

```text
C:\Users\fmall\Downloads\Prototipo web AgroDesicions
```

## Alcance de este repo

Este repo contiene la experiencia del Usuario Admin:

- Login.
- Panel tecnico.
- Vista de rulebooks.
- Vista de documentos RAG.
- Validaciones.
- Configuracion tecnica.
- Estadisticas administrativas.

No debe contener el flujo agricola de usuario final: registro de parcelas, nueva evaluacion, procesamiento, resultados o reportes agricolas.

## Como levantar

Instalar dependencias:

```bash
npm i
```

Levantar desarrollo:

```bash
npm run dev
```

Build:

```bash
npm run build
```

El proxy de Vite esta configurado asi:

```text
/api -> http://127.0.0.1:8000
```

## Estado actual

La app Admin compila como proyecto separado y navega solo entre:

- `login`
- `admin`

El login usa el endpoint real:

- `POST /auth/login`

Despues del login navega al panel tecnico.

## Mock o provisional

Actualmente el panel admin sigue usando datos mock:

```text
src/features/admin/infrastructure/mock/adminData.ts
```

Mocks incluidos:

- Rulebooks.
- Documentos RAG.
- Fragmentos RAG.
- Estadisticas de administracion.
- Estados de validacion.

Motivo:

- El backend tiene codigo para rulebooks y documentos, pero esos servicios aun no estan listos como superficie estable para frontend.
- Algunos endpoints existen en codigo, pero no conviene depender de ellos hasta confirmar que esten cableados en `main.py` y probados con datos reales.

## Separacion realizada

Se removio de este repo:

- `src/features/dashboard`
- `src/features/evaluations`
- Rutas agricolas.
- Navegacion a dashboard agricola.

Se conservo:

- `src/features/auth`
- `src/features/admin`
- `src/shared`
- Cliente HTTP compartido.
- UI base del prototipo.

El `package.json` fue renombrado a:

```json
"name": "via-admin-frontend"
```

## Backend pendiente para conectar Admin

Prioridad sugerida:

- Confirmar endpoints reales para listar rulebooks.
- Confirmar endpoint para crear/cargar rulebook.
- Confirmar endpoint para publicar rulebook.
- Confirmar endpoints de documentos.
- Confirmar flujo de carga/indexacion RAG.
- Definir contratos de respuesta para stats administrativas.

Endpoints vistos en backend que podrian servir cuando esten estabilizados:

- `GET /rulebooks`
- `POST /rulebooks`
- `POST /rulebooks/{id}/publish`
- `GET /rulebooks/{crop_id}/active`
- `POST /documentos`
- `GET /documentos/{id}`
- `GET /documentos/{id}/fragmentos`
- `GET /documentos/fragmentos/buscar`

## Siguientes pasos

- Revisar con backend cuales endpoints Admin ya estan listos de verdad.
- Crear adaptadores en `src/features/admin/infrastructure/api`.
- Reemplazar `adminData.ts` gradualmente.
- Agregar control de rol Admin cuando backend lo exponga en el token o en un endpoint de usuario actual.
- Ajustar UI para carga real de archivos rulebook/documentos.
- Crear repositorio Git independiente para este proyecto.
