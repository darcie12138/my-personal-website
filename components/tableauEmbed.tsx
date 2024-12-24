// app/components/tableauEmbed.ts

// 这就是你要输出的一整段 HTML + JS：
// 1) 用字符串拼好 <div>...<script>...</script>；
// 2) 把 &#47; 之类的转成正常的 /
// 3) 注意换行、引号、转义等不要出错

export const tableauEmbedCode = `
<div class='tableauPlaceholder' id='viz1734922404796' style='position: relative'><noscript><a href='#'><img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;GlobalCOVID-19VaccinationAnalysis&#47;WORLDCOVIDVACCINATION&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='GlobalCOVID-19VaccinationAnalysis&#47;WORLDCOVIDVACCINATION' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Gl&#47;GlobalCOVID-19VaccinationAnalysis&#47;WORLDCOVIDVACCINATION&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='zh-CN' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1734922404796');                    var vizElement = divElement.getElementsByTagName('object')[0];                    if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1600px';vizElement.style.height='1300px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1600px';vizElement.style.height='1300px';} else { vizElement.style.minWidth='1016px';vizElement.style.maxWidth='100%';vizElement.style.height='6000px';}                     var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
`;

