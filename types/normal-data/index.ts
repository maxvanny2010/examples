import { posts } from './data/data';
import { NormalizeService } from './services/normalize';

const service = new NormalizeService();
const result = service.normalizeData(posts);
console.log(result);


