#!/bin/bash

# Nombre del archivo de backup
BACKUP_FILE="backup_db_full.sql"

echo "💾 Iniciando copia de seguridad de la base de datos (PostgreSQL)..."

# Ejecutar pg_dump dentro del contenedor
# Usamos la variable de entorno PGPASSWORD para evitar que pida contraseña interactivamente
docker compose exec -e PGPASSWORD=app_password database pg_dump -U app_user app_db > "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Copia de seguridad guardada en '$BACKUP_FILE'."
else
    echo "❌ Error al realizar la copia de seguridad."
    exit 1
fi
