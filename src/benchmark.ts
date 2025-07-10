import minimalWith from './minimal-with';
import minimalWithout from './minimal-without';
import minimalPrecompiled from './minimal-precompiled';
import maximalWithout from './maximal-without';
import maximalPrecompiled from './maximal-precompiled';

await minimalWith();
await minimalWithout();
await minimalPrecompiled();

await maximalWithout();
await maximalPrecompiled();
