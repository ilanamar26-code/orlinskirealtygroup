#!/bin/bash

echo "🚀 Configuration Sanity pour Orlinski Realty Group"
echo ""
echo "Ce script va vous guider pour configurer Sanity CMS."
echo ""

# Vérifier si .env.local existe
if [ -f .env.local ]; then
    echo "✅ Fichier .env.local trouvé"
    if grep -q "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local && ! grep -q "your_project_id_here" .env.local; then
        echo "✅ Project ID semble configuré"
        PROJECT_ID=$(grep "NEXT_PUBLIC_SANITY_PROJECT_ID" .env.local | cut -d '=' -f2)
        echo "   Project ID actuel: $PROJECT_ID"
    else
        echo "⚠️  Project ID non configuré"
    fi
else
    echo "⚠️  Fichier .env.local non trouvé"
    echo "   Création du fichier .env.local.example..."
    cat > .env.local.example << 'ENVEOF'
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
ENVEOF
    echo "   Copiez .env.local.example vers .env.local et remplissez les valeurs"
fi

echo ""
echo "📋 Étapes suivantes:"
echo ""
echo "1. Créez un projet Sanity:"
echo "   - Allez sur https://www.sanity.io/manage"
echo "   - Cliquez sur 'Create project'"
echo "   - Notez le Project ID"
echo ""
echo "2. Configurez .env.local:"
echo "   - Copiez .env.local.example vers .env.local (si nécessaire)"
echo "   - Ajoutez votre Project ID"
echo ""
echo "3. Lancez le Studio Sanity:"
echo "   npm run studio"
echo ""
echo "4. Le Studio sera accessible sur http://localhost:3333"
echo ""
echo "📚 Pour plus de détails, consultez SANITY-SETUP.md"
