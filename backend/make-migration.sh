#!/bin/bash
echo "🛠️  Generando nueva migración (en Docker)..."
docker compose -f ../docker-compose.yml exec backend php bin/console make:migration
echo "✅ ¡Migración generada! Revisa la carpeta 'migrations'."
