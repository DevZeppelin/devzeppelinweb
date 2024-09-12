import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";
import { IndexGridImageContent } from "../IndexGridImageContent";


const SectionGridImages = () => {
    return (
        <section>

       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8 md:m-24 text-center fadeIn element ">
            <Fade left>
              <div className="my-auto font-bold flex">
                <div className="w-3 h-32 bg-yellow my-auto"></div>
                <p className="text-lg m-6 text-lightGray">
                  Programación, diseño y marketing digital para potenciar tu marca al extremo
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridContainer">
                  <div className="indexGridImageText">
                    Cartas QR
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
                  Instagram Personalizado
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
                 Invitaciones y Posters
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
                  Fotos Editadas Originales
                </div>
                <IndexGridImageContent 
                    src="/gridImg/04.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">Invitaciones QR</div>
                <IndexGridImageContent 
                    src="/gridImg/05.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">Actualización de logos</div>
                <IndexGridImageContent 
                    src="/gridImg/06.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="relative">
                <div className="indexGridImageText">Las mejores páginas Web</div>
                <IndexGridImageContent 
                    src="/gridImg/07.webp"
                    alt="development code ide vscode linux dev zeppelin webs pages www perfomance "
                  />
              </div>
            </Fade>
            <Fade bottom>
              <div className="m-6 space-y-4 md:space-y-4 text-center my-auto element mt-4">
                <h2 className="font-bold text-xl font-righteous text-yellow pt-6">
                  ¡Yo te contacto!
                </h2>
                <p className="text-lightGray">
                  Dejame tu nombre, teléfono o correo electrónico y me
                  comunicaré con vos a la brevedad
                </p>
                <Fade bottom>
                  <Link href="/contacto">
                    <button className="btn">Te llamo!</button>
                  </Link>
                </Fade>
              </div>
            </Fade>
          </div>
          
         
          
        </section>
    )
}

export default SectionGridImages
