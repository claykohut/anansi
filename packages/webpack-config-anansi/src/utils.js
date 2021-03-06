function setLoaderOptions(config, loaderName, options) {
  const transform = (loader) => {
    if (loader === loaderName) {
      return {
        loader,
        options,
      };
    }
    return loader;
  };
  config.module.rules.forEach((rule) => {
    if (!rule.use) return;
    if (Array.isArray(rule.use)) {
      rule.use = rule.use.map(transform);
    }
    rule.use = transform(rule.use);
  });
}

export { setLoaderOptions };
