import pcHome from "../../img/pc.png";
import graphicsСard from "../../img/videokarta.png";
import mother from "../../img/mother.png"
import '../../css/Home.css'

const ArticleHome = () => {
  let titles = {
    first: "Почему именно мы?",
    second: "Качество",
    third: "Гарантия",
  };

  return (
    <div className="marginPage">
      <div className="container">
        <article>
          <h1>{titles.first}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            suscipit accusantium qui ipsum nam veritatis optio minus placeat
            iste, nisi corporis. Voluptate doloremque ut corporis, nisi animi
            natus porro. Hic! Iure laborum a sit quo voluptatem repudiandae aut
            impedit molestiae fugiat quas ipsa quos consequuntur sint optio,
            laboriosam illo in eos dicta! Aut eaque nulla illum dolorem officiis
            amet accusamus? Consequatur modi itaque molestias dolorum aliquid
            aliquam blanditiis perspiciatis, beatae, totam temporibus porro cum.
            Deserunt rerum veniam laudantium mollitia nulla facilis illum
            voluptate aperiam amet, eius veritatis tempore soluta vitae.
          </p>
          <a href="#">Узнать больше...</a>
        </article>
        <img src={pcHome} width={350} height={350} alt='{"logo"}/' />
      </div>
      <div className="container">
        <img src={graphicsСard} width={350} height={350} alt='{"logo"}/' />
        <article className="rightFloat">
          <h1>{titles.second}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            suscipit accusantium qui ipsum nam veritatis optio minus placeat
            iste, nisi corporis. Voluptate doloremque ut corporis, nisi animi
            natus porro. Hic! Iure laborum a sit quo voluptatem repudiandae aut
            impedit molestiae fugiat quas ipsa quos consequuntur sint optio,
            laboriosam illo in eos dicta! Aut eaque nulla illum dolorem officiis
            amet accusamus? Consequatur modi itaque molestias dolorum aliquid
            aliquam blanditiis perspiciatis, beatae, totam temporibus porro cum.
            Deserunt rerum veniam laudantium mollitia nulla facilis illum
            voluptate aperiam amet, eius veritatis tempore soluta vitae.
          </p>
          <a href="#">Узнать больше...</a>
        </article>
      </div>
      <div className="container">
        <article>
          <h1>{titles.third}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            suscipit accusantium qui ipsum nam veritatis optio minus placeat
            iste, nisi corporis. Voluptate doloremque ut corporis, nisi animi
            natus porro. Hic! Iure laborum a sit quo voluptatem repudiandae aut
            impedit molestiae fugiat quas ipsa quos consequuntur sint optio,
            laboriosam illo in eos dicta! Aut eaque nulla illum dolorem officiis
            amet accusamus? Consequatur modi itaque molestias dolorum aliquid
            aliquam blanditiis perspiciatis, beatae, totam temporibus porro cum.
            Deserunt rerum veniam laudantium mollitia nulla facilis illum
            voluptate aperiam amet, eius veritatis tempore soluta vitae.
          </p>
          <a href="#">Узнать больше...</a>
        </article>
        <img src={mother} width={350} height={350} alt='{"logo"}/' />
      </div>
    </div>
  );
};

export default ArticleHome;
