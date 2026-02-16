#!/bin/bash
echo "♻️  Cargando fixtures (esto borrará los datos actuales)..."
docker compose -f ../docker-compose.yml exec backend php bin/console doctrine:fixtures:load --no-interaction
echo "✅ ¡Fixtures cargadas con éxito!"
