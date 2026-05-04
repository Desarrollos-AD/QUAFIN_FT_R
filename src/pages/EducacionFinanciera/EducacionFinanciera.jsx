import React from "react";
import "./EducacionFinanciera.scss";
import NavBar from "../../components/NavBar/NavBar";

const EducacionFinanciera = () => {
  return (
    <div className="">
      <header className="blog__header">
        <div className="contenedor">
          <NavBar></NavBar>
          <div className="blog">
            <h1>Educación Financiera</h1>

            <h3>
              En el sitio de Educación Financiera de la Condusef "Educa tu
              cartera", podrás adquirir conocimientos para tomar decisiones
              financieras informadas y obtener bienestar financiero personal y
              familiar.
            </h3>

            <div className="blog__tiempo">
              <h4>Tiempo de lectura: 8 minutos</h4>
              <div className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="contenedor-blog">
        <article className="articulo">
          <p>
            La disciplina o educación financiera es un conocimiento fundamental
            para toda persona que maneje dinero y los diversos instrumentos
            financieros a disposición del público en general. Con esta
            educación, los recursos obtenidos se emplearán de una manera
            adecuada y eficiente por los usuarios, sin embargo no basta con que
            la población tenga esta educación, hay que extenderla hasta el mismo
            gobierno y es por eso mismo que el día 17 de agosto de 2015, se ha
            lanzado la “Iniciativa de ley de disciplina financiera de las
            entidades federativas y los municipios”.
          </p>

          <p>
            La iniciativa propone un fortalecimiento interno (en términos
            gubernamentales) a favor del saneamiento de las finanzas públicas,
            esto con el fin de volver eficiente la gestión de los recursos y
            poder ofrecer unas cuentas limpias a los habitantes del país en
            cuestión. Anteriormente se implementó la “Ley federal de
            transparencia y acceso a la información pública gubernamental”
            publicada en el DOF y reformada por última vez el 14 de julio de
            2014. Está ley implementada por el ex presidente Vicente Fox
            Quesada, tenía como objetivo el esclarecimiento del uso por parte de
            los diferentes estados de la república de los recursos provistos por
            el gobierno federal, sin embargo, no cumplió el objetivo en su
            totalidad y los gastos desmesurados de las entidades gubernamentales
            continúa hasta la fecha. Tales gastos se ven reflejados en la
            economía del país, afectándola de sobremanera, ¿ejemplos de estos
            gastos? Vehículos de lujo, aeronaves de lujo, mansiones y otras
            excentricidades que son bien sabidas por el pueblo y siempre negadas
            por los gobernantes. Por lo tanto, se proponen los siguientes puntos
            en la iniciativa de ley antes mencionada:41
          </p>

          <div className="resaltado">
            <div className="resaltado__linea"></div>
            <div className="resaltado__lista">
              <ol>
                <li>- Reglas y estándares de Disciplina Financiera</li>
                <li>
                  - Nuevas obligaciones para contratación responsable de deuda
                </li>
                <li>
                  - Creación de un Registro Público Único para transparentar
                  obligaciones financieras
                </li>
                <li>
                  - Se establece un Sistema de Alertas de Deuda Pública para
                  Estados y Municipios
                </li>
                <li>
                  - Estados y Municipios podrán obtener créditos con aval de la
                  Federación
                </li>
              </ol>
            </div>
          </div>

          <p>
            A través de estos componentes se avanza en un manejo más responsable
            y transparente de los recursos financieros en los tres órdenes de
            gobierno”. (Gobierno Federal, 2015) Esta iniciativa es bastante
            interesante y de ser aplicada de manera adecuada, se pueden lograr
            grandes cambios para impulsar al país al invertir de manera correcta
            y como siempre debió ser, los recursos obtenidos por cada estado e
            institución gubernamental. Al educar a este sector del país en
            términos financieros, se lograrán diferentes cosas, entre ellas:
          </p>

          <div className="resaltado">
            <div className="resaltado__linea"></div>
            <div className="resaltado__lista">
              <ol>
                <li>- Sanear las finanzas del país.</li>
                <li>
                  - Nuevas obligaciones para contratación responsable de deuda
                </li>
                <li>
                  - Mejorar la calidad de vida de la población en general.
                </li>
                <li>
                  - Aumentar el nivel de felicidad de la población dando pie a
                  que esta esté más tranquila y por tanto, sea más eficiente y
                  productiva.
                </li>
                <li>
                  - Fortalecer la economía del país y el valor de la moneda ante
                  otras.
                </li>
              </ol>
            </div>
          </div>
          <p>
            La implementación de esta iniciativa de ley es un buen incentivo
            para impulsar el saneamiento de la economía del país y es necesario
            buscar funcionarios públicos honestos que cumplan con su cargo de la
            manera que debe ser, sin gastar en exceso y en lujos que son con
            fines personales y gastar más en el bien común.
          </p>
          <p>
            Antes de poder implementar esta iniciativa es de total importancia
            dar cargos administrativos y políticos que sean transparentes y
            reducir el número de estos o añadir nuevos integrantes que pasen
            pruebas de confianza y educación financiera adecuada para que hagan
            honor a su cargo y dirijan al país por un buen camino. Además de
            implementar esta iniciativa es importante establecer un sistema
            financiero bien definido y establecido que tenga el mínimo margen de
            deficiencia para evitar el gasto excesivo por parte del gobierno
            federal y las dependencias estatales del mismo.
          </p>
        </article>
      </div>
    </div>
  );
};

export default EducacionFinanciera;
