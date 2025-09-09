// A primeira linha importa  o plugin que vai gerar o sitemap.
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {

  // NOVA INSTRUÇÃO PARA O SITEMAP:
  // Aqui, instalamos e configuramos o plugin, dizendo a ele qual é o endereço principal do seu site.
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://receitas.chefbrico.com",
    },
  });
  
  // INSTRUÇÃO EXPLÍCITA: Copie estas pastas, como estão, para o site final.
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./js");
  eleventyConfig.addPassthroughCopy("./imagens");

  // Copia também os arquivos individuais da raiz do projeto.
  eleventyConfig.addPassthroughCopy("./apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("./favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("./site.webmanifest");

  // Adiciona um "filtro" para que possamos mostrar o ano no rodapé dinamicamente.
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    // Define que os arquivos de layout (como header/footer) estão em _includes.
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    // Permite que arquivos .html sejam processados como templates.
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
