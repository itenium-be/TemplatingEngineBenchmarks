import * as b from 'benny';
import Handlebars from 'handlebars';
import fs from 'fs';
import Mustache from 'mustache';
import { data, mustacheTemplate } from './maximal.js';

const handlebarTemplate = fs.readFileSync('./src/maximal-precompiled.handlebars', 'utf-8');
const hbsTemplate = Handlebars.compile(handlebarTemplate);

export default function suite() {
  return b.suite(
    'Template Engine Benchmark: Maximal without',

    b.add('Handlebars', () => {
      hbsTemplate(data);
    }),

    b.add('Mustache', () => {
      Mustache.render(mustacheTemplate, data);
    }),

    b.cycle(),
    b.complete(),

    b.save({ file: 'maximal-without', version: '1.0.0' }),
    b.save({ file: 'maximal-without', format: 'chart.html' }),
  );
}
