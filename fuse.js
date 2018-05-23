const { FuseBox } = require('fuse-box');
const fuse = FuseBox.init({
  useTypescriptCompiler: true,
  experimentalFeatures: true,
  homeDir: 'src',
  output: 'dist/$name.js',
});

fuse
  .bundle('bundle-migrate')
  .watch('~/migrate/**')
  .instructions(' > [migrate/_entry.ts]');
fuse.run();
