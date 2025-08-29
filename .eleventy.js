module.exports = function(eleventyConfig) {
  // INSTRUÇÃO 1: Copiar a pasta de estilos (css) para o site final.
  eleventyConfig.addPassthroughCopy("css");

  // INSTRUÇÃO 2: Copiar a pasta de scripts (js) para o site final.
  eleventyConfig.addPassthroughCopy("js");

  // INSTRUÇÃO 3: Copiar a pasta de imagens (imagens) para o site final.
  eleventyConfig.addPassthroughCopy("imagens");

  // INSTRUÇÃO 4: Copiar os arquivos de favicon e manifest.
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  return {
    // Define que os arquivos de entrada estão na pasta principal (.)
    // e o resultado final deve ir para a pasta _site
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
