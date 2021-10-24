import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";
import { IndexGridImageContent } from "../IndexGridImageContent";


const SectionGridImages = () => {
    return (
        <section>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element">
            <Fade left>
              <div className="my-auto font-bold flex">
                <div className="w-3 h-32 bg-yellow my-auto"></div>
                <p className="text-lg m-6 text-lightGray">
                  FABRICAMOS PÁGINAS WEB ADMINISTRABLES, VELOCES, ESCALABLES Y
                  OPTIMIZADAS PARA UNA EXCELENTE EXPERIENCIA DE USUARIO
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridContainer">
                  <div className="indexGridImageText">
                    Webs de última tecnología
                  </div>
                 
                  <IndexGridImageContent 
                    src="/gridImg/01.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />

                </div>
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Administrá tu contenido
                </div>

                <IndexGridImageContent 
                    src="/gridImg/02.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
                
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Diseño, color, fotos y logo HD
                </div>
                <IndexGridImageContent 
                    src="/gridImg/03.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">
                  Primeros lugares en Google
                </div>
                <IndexGridImageContent 
                    src="/gridImg/04.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">App Movil</div>
                <IndexGridImageContent 
                    src="/gridImg/05.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">Diseño responsivo</div>
                <IndexGridImageContent 
                    src="/gridImg/06.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">e-commerce con Shopify</div>
                <IndexGridImageContent 
                    src="/gridImg/07.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element">
                <h2 className="font-bold text-xl font-righteous text-yellow">
                  ¡Nosotros te llamamos!
                </h2>
                <p className="text-lightGray">
                  Déjanos tu nombre, teléfono o correo electrónico y nos
                  comunicaremos contigo a la brevedad
                </p>
                <Fade bottom>
                  <Link href="/contacto">
                    <button className="btn">Te Llamamos!</button>
                  </Link>
                </Fade>
              </div>
            </Fade>
          </div>
        </section>
    )
}

export default SectionGridImages
