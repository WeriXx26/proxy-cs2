export default async function handler(req, res) {
    // Headers pour le CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: "L'URL est manquante. Exemple: ?url=https://api.github.com" });
    }

    try {
        const response = await fetch(decodeURIComponent(url));
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Erreur de chargement", details: error.message });
    }
}
