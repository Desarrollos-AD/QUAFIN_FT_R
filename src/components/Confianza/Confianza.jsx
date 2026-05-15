import React from "react";
import "./Confianza.scss";
import CabeceraSection from "../ui/CabeceraSection/CabeceraSection";
import avatarMujer from "../../assets/img/img_avatar.png";
import avatarHombre from "../../assets/img/avatar_hombre.png";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Confianza = () => {
  return (
    <section className="confianza">
      <div className="contenedor">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CabeceraSection
            titulo="Confianza"
            subtitulo="Tu tranquilidad, nuestra prioridad"
            descripcion="Ofrecemos soluciones financieras sólidas y éticas para personas y empresas, para que puedas enfocarte en crecer y avanzar con seguridad."
          />
        </motion.div>

        <motion.div
          className="confianza__cards"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="confianza__cards--atencion"
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
          >
            <div className="chat">
              <motion.div
                className="chat__chat1"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <img loading="lazy" src={avatarHombre} alt="Imagen Cliente" />
              </motion.div>

              <motion.div
                className="burbuja__mensaje"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="chat1">
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                </div>
                <div className="chat2">
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                  <div className="simulacion__texto" />
                </div>
                <div className="simulacion__btn">
                  <p>Enviar Mensaje</p>
                </div>
              </motion.div>

              <motion.div
                className="chat__chat2"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <img loading="lazy" src={avatarMujer} alt="Imagen Cliente" />
              </motion.div>
            </div>
            <div className="contenido">
              <h4>Atención personalizada</h4>
              <p>
                En Quafin ofrecemos asesoría especializada y acompañamiento
                integral en cada etapa del crédito o financiamiento.
              </p>
              <br />
              <p>
                Nuestro equipo brinda una guía clara y experta, enfocada en
                comprender las necesidades de cada cliente y ofrecer una
                atención oportuna, respondiendo solicitudes dentro de las
                siguientes 24 horas hábiles.
              </p>
            </div>
          </motion.div>

          <motion.div
          className="confianza__cards--tipos"
          variants={fadeUp}
          whileHover={{ y: -10 }}
          >
            <motion.div
            className="img"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            />
            <div className="contenido">
              <h4>Tipos de atención disponibles</h4>
              <p>Puedes comunicarte con nosotros a través de:</p>
              <ul>
                <li>Formulario de contacto</li>
                <li>WhatsApp</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="confianza__cards--icono"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.svg
              width="243"
              height="220"
              viewBox="0 0 243 220"
              fill="none"
            >
              <motion.path
                d="M150.627 113.154V122.046C150.627 128.533 161.043 122.63 163.422 121.651C191.489 134.206 224.761 113.196 224.394 83.089C224.394 59.8235 204.946 40.8946 181.041 40.8946C142.497 40.8489 123.155 86.9229 150.627 113.154ZM181.042 47.3497C201.29 47.3497 217.763 63.3824 217.763 83.0895C218.09 109.118 188.8 126.916 164.945 115.22C164.035 114.809 163.12 114.784 162.199 115.146L157.258 117.178V111.772C157.258 110.869 156.869 110.007 156.187 109.396C131.709 87.528 147.793 47.3316 181.042 47.3497Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M170.639 77.4875C172.47 77.4875 173.954 76.0429 173.954 74.26C173.954 70.5048 177.337 67.3057 181.19 67.3621C184.884 67.4344 187.928 70.3013 188.119 73.8886C188.328 77.7892 185.059 81.1596 181.042 81.1596C179.21 81.1596 177.726 82.6043 177.726 84.3872V94.9766C177.876 99.246 184.206 99.2507 184.357 94.9766V87.2145C190.65 85.6786 195.078 79.8669 194.742 73.5542C194.371 66.6034 188.477 61.0485 181.323 60.9087C173.735 60.7529 167.323 66.8801 167.323 74.26C167.323 76.0429 168.807 77.4875 170.639 77.4875Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M181.042 101.647C176.775 101.647 176.768 108.103 181.042 108.103C185.309 108.103 185.316 101.647 181.042 101.647Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M46.9778 167.02H21.599C19.7675 167.02 18.2834 168.465 18.2834 170.248V182.622C18.2834 184.405 19.7675 185.85 21.599 185.85H46.9778C48.8093 185.85 50.2934 184.405 50.2934 182.622V170.248C50.2934 168.465 48.8093 167.02 46.9778 167.02ZM43.6622 179.395H24.9146V173.475H43.6622V179.395Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M223.652 142.073C221.776 139.856 219.009 138.584 216.059 138.584H121.977C120.63 138.584 119.327 138.807 118.108 139.219C114.136 133.707 109.265 128.834 103.715 124.818H125.469C127.3 124.818 128.784 123.373 128.784 121.591V61.8395C129.357 17.0092 78.6522 -13.65 37.2759 6.11943C33.4034 7.90922 36.2468 13.7403 40.1203 11.951C77.2026 -5.75582 122.662 21.6754 122.153 61.8404C122.153 61.8399 122.153 118.363 122.153 118.363H98.989C103.7 113.175 107.204 106.994 108.522 101.803C109.062 101.853 109.604 101.886 110.147 101.901C116.715 101.901 122.059 96.6992 122.059 90.3057V79.7735C122.059 74.4864 118.405 70.0143 113.426 68.6247C115.711 40.3405 94.3627 16.1636 64.6511 15.9828C34.9404 16.1644 13.5912 40.3414 15.8772 68.6247C11.5656 69.8279 8.24739 73.3429 7.4353 77.6967L7.53874 61.8399C7.53874 46.2534 14.413 31.3107 26.3991 20.8427C29.59 18.0554 25.1621 13.2515 21.9704 16.0375C8.58425 27.7281 0.9067 44.4223 0.9067 61.8188V121.569C1.08618 123.547 1.80235 124.63 3.83281 124.818H25.9787C9.80218 136.522 0 155.317 0 174.95V183.939C0 188.112 6.63116 188.112 6.63116 183.939V174.95C6.63116 160.323 12.6929 146.06 23.2471 135.656L46.4738 151.124C47.999 152.024 49.4543 151.845 50.8402 150.586L61.6034 138.622V183.938C61.6034 188.111 68.2346 188.111 68.2346 183.938V138.622L78.9983 150.586C80.3842 151.846 81.8395 152.025 83.3647 151.124L106.506 135.713C108.766 137.948 110.839 140.369 112.7 142.955C111.551 144.363 110.728 146.045 110.355 147.902L99.6482 201.241H55.9276C54.0961 201.241 52.612 202.686 52.612 204.469V210.031C52.612 215.527 57.2066 220 62.8532 220H201.908C207.559 220 212.447 216.082 213.53 210.683L215.445 201.149C216.267 197.055 209.759 195.814 208.937 199.911L207.023 209.445C206.546 211.821 204.395 213.545 201.908 213.545H107.826C105.824 213.545 104.297 211.739 104.68 209.827L116.863 149.14C117.34 146.764 119.491 145.039 121.977 145.039H216.059C218.06 145.039 219.588 146.846 219.204 148.758L212.32 183.051C211.498 187.146 218.006 188.385 218.828 184.289L225.712 149.996C226.278 147.177 225.527 144.289 223.652 142.073ZM64.9186 126.809C64.912 126.809 64.9058 126.809 64.8991 126.809C47.2125 126.801 31.7341 115.097 27.4066 98.7292C29.7045 96.614 31.1404 93.6202 31.1404 90.3057V79.848C41.8055 79.8191 63.8426 77.1717 75.2769 57.2852C78.9833 63.687 86.2095 73.1217 98.3387 77.766C97.9952 78.9395 98.2198 88.8825 98.1597 90.3057C98.1597 93.8233 99.7777 96.9802 102.327 99.1087C102.319 99.1363 102.312 99.1638 102.304 99.1913C97.8436 105.04 90.7394 108.564 83.0685 108.564H76.8131C73.1501 96.4922 55.0788 98.6715 54.7455 111.404C54.9882 123.665 72.2407 126.357 76.5629 115.019H83.0681C87.3814 115.019 91.5551 114.144 95.3622 112.527C88.079 121.477 76.6593 126.809 64.9186 126.809ZM65.9747 115.813C63.4403 115.813 61.378 113.835 61.378 111.404C61.6295 105.553 70.3217 105.556 70.5723 111.404C70.5719 113.835 68.5096 115.813 65.9747 115.813ZM115.427 79.7735V90.3057C115.427 93.1403 113.058 95.4461 110.146 95.4461C107.351 95.3381 104.792 93.2815 104.792 90.3057V79.7735C105.074 72.9444 115.144 72.9444 115.427 79.7735ZM64.6507 22.4379C87.888 22.4379 106.793 40.6728 106.793 63.0862V68.6247C104.651 69.2229 102.754 70.3917 101.287 71.9503C84.8333 65.9209 78.4417 48.8002 78.3781 48.6263C77.3883 45.8674 73.2159 45.7973 72.1465 48.5493C68.0648 59.0595 60.5456 66.3688 49.7978 70.2746C41.7056 73.2151 33.7663 73.5202 29.1515 73.3649C27.6024 71.0991 25.2568 69.392 22.5075 68.6242V63.0858C22.5079 40.6728 41.4129 22.4379 64.6507 22.4379ZM13.8741 79.7735C13.8741 76.9389 16.2432 74.6331 19.1552 74.6331H19.2286C22.1405 74.6331 24.5092 76.9389 24.5092 79.7735V90.3057C24.5092 93.1403 22.1405 95.4461 19.2286 95.4461H19.1552C16.2432 95.4461 13.8741 93.1403 13.8741 90.3057V79.7735ZM7.3429 91.8076C8.11963 98.2584 14.7088 102.98 21.374 101.713C23.2621 107.985 26.5565 113.635 30.8756 118.363H7.3429V91.8076ZM47.7894 144.179L28.3177 131.212C31.4211 128.797 34.7835 126.688 38.3595 124.924C44.11 128.944 50.842 131.685 58.0633 132.758L47.7894 144.179ZM82.0482 144.179L71.7743 132.758C78.859 131.708 85.6268 129.045 91.4547 124.983C95.0112 126.749 98.3551 128.855 101.443 131.263L82.0482 144.179ZM62.8523 213.545C60.8616 213.545 59.2423 211.969 59.2423 210.031V207.697H98.3516C97.8449 209.609 97.8573 211.667 98.5231 213.545H62.8523Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M148.264 179.292C148.264 186.634 154.4 192.606 161.942 192.606C180.087 191.875 180.082 166.706 161.942 165.977C154.4 165.977 148.264 171.95 148.264 179.292ZM168.989 179.292C168.989 183.074 165.828 186.151 161.942 186.151C152.594 185.774 152.597 172.807 161.942 172.432C165.828 172.432 168.989 175.51 168.989 179.292Z"
                fill="#114070"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Confianza;
