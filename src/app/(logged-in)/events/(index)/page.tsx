import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

export default function CreateEventPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="py-4 bg-light  inner-header">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-6">
              <h4 className="mt-0 mb-0 text-dark">Blank</h4>
            </div>
            <div className="col-lg-6 col-md-6 text-right">
              <div className="breadcrumbs">
                <p className="mb-0">
                  <a href="#">
                    <i className="icofont-ui-home" /> Home
                  </a>{' '}
                  / <span>Blank</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-page py-5 bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bg-white p-4 shadow rounded h-100">
                    <h3 className="mt-0 mb-3">What is Lorem Ipsum?</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of de Finibus
                      Bonorum et Malorum (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
                      comes from a line in section 1.10.32.
                    </p>
                    <p>
                      The standard chunk of Lorem Ipsum used since the 1500s is
                      reproduced below for those interested. Sections 1.10.32
                      and 1.10.33 from de Finibus Bonorum et Malorum by Cicero
                      are also reproduced in their exact original form,
                      accompanied by English versions from the 1914 translation
                      by H. Rackham.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <div className="pt-5 pb-4 bg-white footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>BEST LANGUAGE GENRE MOVIES</h6>
              <ul>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">English Animated Movies</a>
                </li>
                <li>
                  <a href="#">English Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">English Comedy Movies</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>MOVIES BY GENRE</h6>
              <ul>
                <li>
                  <a href="#">Best Animated Movies</a>
                </li>
                <li>
                  <a href="#">Best Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">Best Comedy Movies</a>
                </li>
                <li>
                  <a href="#">Best Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>POPULAR MOVIES</h6>
              <ul>
                <li>
                  <a href="#">English Comedy Movies</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Punjabi Action Movies</a>
                </li>
                <li>
                  <a href="#">English Animated Movies</a>
                </li>
                <li>
                  <a href="#">English Fantasy Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Hindi Animated Movies</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <h6>ABOUT Movbok</h6>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Press Coverage</a>
                </li>
                <li>
                  <a href="#">Current Openings</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">English Action Movies</a>
                </li>
                <li>
                  <a href="#">Tamil Action Movies</a>
                </li>
                <li>
                  <a href="#">Press Release</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <div className="container">
          <p className="m-0 text-center">
            Copyright © <strong>Movbok</strong> 2020 | Made with{' '}
            <i className="fas fa-heart fa-fw text-danger" /> by{' '}
            <a
              className="text-danger"
              target="_blank"
              href="https://www.instagram.com/iamgurdeeposahan/"
            >
              askbootstrap
            </a>
          </p>
        </div>
        {/* /.container */}
      </footer>
    </div>
  );
}
