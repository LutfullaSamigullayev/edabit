function subReddit(link) {
  // Your code here.
  // link ni /r/ bo'yicha 2 ga ajratib olamiz 
	// va 1-indexda turganni / belgisini olib tashlab return qilamiz
  return link.split("/r/")[1].replace("/", "");
}

module.exports = subReddit;
