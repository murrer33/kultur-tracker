export default function handler(req, res) {
  // Yandex'ten gönderirken ekleyeceğimiz ID parametresi (?id=ekip-uye-adi)
  const { id } = req.query; 
  
  const timestamp = new Date().toISOString();
  const userAgent = req.headers['user-agent'] || 'Bilinmeyen Cihaz';
  
  // Vercel Logs panelinde göreceğin çıktı:
  console.log(`[MAİL AÇILDI] ID: ${id} | Zaman: ${timestamp} | Cihaz: ${userAgent}`);

  // 1x1 Şeffaf GIF Base64 verisi
  const transparentGif = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );

  // Tarayıcının resmi cache'lemesini (hafızaya almasını) engellemek için header ayarları
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Content-Length', transparentGif.length);
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Görseli bas ve işlemi bitir
  return res.status(200).send(transparentGif);
}
