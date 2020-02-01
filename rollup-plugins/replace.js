const extname = require("path").extname;
const {createFilter, dataToEsm} = require('rollup-pluginutils');
const MagicString = require('magic-string');

const newStr = '$$self';

function replace (options = {}) {
  // const filter = createFilter(options.include, options.exclude);
  const sourcemap = options.sourcemap === true;

    return {
        // 插件名称
        name: 'replace',

        // 插件处理代码编译
        transform (code, id) {
          // if (!filter(id) || extname(id) !== ".js") return;

          let codeStr = `${code}`;
          const magic = new MagicString(codeStr);
          codeStr = codeStr.replace(/__\$\$self/ig, function(match, offset) {
            const start = offset;
            const end = offset + match.length;
            magic.overwrite(start, end, newStr);
            return newStr;
          });

          const resultCode = magic.toString();
          let resultMap = false;
          resultMap = magic.generateMap({
            hires: true,
          });
      return {
          code: resultCode,
          map: resultMap,
      };
    }

    };
}

export default replace