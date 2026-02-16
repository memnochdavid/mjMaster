#!/bin/bash
echo "🚀 Aplicando migraciones a la base de datos (en Docker)..."
docker compose -f ../docker-compose.yml exec backend php bin/console doctrine:migrations:migrate --no-interaction
echo "✅ ¡Base de datos actualizada!"
