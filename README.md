# TENVO App — Starter Kit

Ce dossier contient le projet React + Tailwind CSS prêt à l'emploi avec les 4 maquettes de la plateforme Tenvo, ainsi que les scripts SQL pour Supabase.

## 🚀 Démarrage Rapide

1. Dézippez le dossier `tenvo-app.zip`.
2. Ouvre un terminal dans le dossier `tenvo-app` (ou ouvre le dossier dans VS Code).
3. Installe les dépendances :
   ```bash
   npm install
   ```
4. Lance le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvre l'adresse affichée (par exemple `http://localhost:5173`) dans ton navigateur.

## 📁 Structure du projet

- `src/components/ProDashboard.jsx` : Tableau de bord professionnel (Coach)
- `src/components/ClientProfile.jsx` : Fiche client détaillée (Inès Bernard)
- `src/components/MobileClientSpace.jsx` : Espace particulier mobile (390x844)
- `src/components/ClubDashboard.jsx` : Espace Organisation / Club
- `src/App.jsx` : Barre de navigation supérieure pour tester les 4 écrans
- `sql/01_fondations.sql` : Tables, permissions et RLS pour Supabase
- `sql/02_compte.sql` : Extensions profil et suppression de compte
