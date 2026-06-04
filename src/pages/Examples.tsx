export default function Examples() {
  const demoUrl = 'https://yona-lovat.vercel.app/'
  const demoUrl2 = 'https://garden-products-market.vercel.app/'

  return (
    <div style={{padding:24,maxWidth:900,margin:'0 auto'}}>
      <h1>Примеры работ</h1>
      <p>Эта страница показывает примеры выполненных проектов и демонстрации навыков. Клиент видит кейсы, описание задач и результатов.</p>

      <ul>
        <li>Дизайн лендинга — концепция, макет, результат</li>
        <li>Интернет-магазин — фронтенд, интеграции, оптимизация</li>
      </ul>

      <section style={{marginTop:24}}>
        <h2>Демо — предварительный просмотр</h2>
        <p>Ниже — маленькое окно с демо-сайтом; если браузер или хост запрещают встраивание, откройте демо в новой вкладке.</p>

        <div style={{border:'1px solid #e1e1e1',borderRadius:6,overflow:'hidden',maxWidth:900}}>
          <div style={{width:'100%',height:380,background:'#fff'}}>
            <iframe
              src={demoUrl}
              title="Demo preview"
              style={{width:'100%',height:'100%',border:0,display:'block'}}
              sandbox="allow-scripts allow-forms allow-same-origin"
            />
          </div>
          <div style={{padding:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <a href={demoUrl} target="_blank" rel="noreferrer">Открыть демо в новой вкладке</a>
            <span style={{color:'#666',fontSize:13}}>Если демо не показывается — хост может запрещать встраивание (X-Frame-Options).</span>
          </div>
        </div>
            <div style={{border:'1px solid #e1e1e1',borderRadius:6,overflow:'hidden',maxWidth:900,marginTop:24}}>
                <iframe
              src={demoUrl2}
              title="Demo preview 2"
              style={{width:'100%',height:'100%',border:0,display:'block',marginTop:12}}
              sandbox="allow-scripts allow-forms allow-same-origin"
            />
            </div>
      </section>
    </div>
  )
}
