import './components/main.scss';

import './components/img/Latest_News_Video.jpg';
import './components/img/MI_Strategic_Growth_Chief_Seeks_Disruptive_Deals.jpg';
import './components/img/MI_Strategic_Growth_Chief_Seeks_Disruptive_Deals_big.jpg';
import './components/img/MI_Strategic_Growth_Chief_Seeks_Disruptive_Deals_small.jpg';
import './components/img/carousel_img_01.jpg';
import './components/img/timeline_article_img_01.jpg';
import './components/img/timeline_article_img_02.jpg';
import './components/img/timeline_article_img_03.jpg';
import './components/img/timeline_article_img_04.jpg';
import './components/img/timeline_article_img_05.jpg';
import './components/img/timeline_article_img_06.jpg';
import './components/img/timeline_article_img_07.jpg';

const faviconsContext = require.context(
    '!!file-loader?name=/favicons/[name].[ext]!.',
    true,
    /\.(svg|png|ico|xml|json|webmanifest)$/
);
faviconsContext.keys().forEach(faviconsContext);
