import {Card, Container, Row, Col, Image} from "react-bootstrap"
import nanoImage from "../assets/images/Korea/Nanomachine.jpg"
import elceedImage from "../assets/images/Korea/Elceed.jpg"
import lookismImage from "../assets/images/Korea/Lookism.jpg"
import northImage from "../assets/images/Korea/NorthernBlade.jpg"
import questismImage from "../assets/images/Korea/Questism.jpg"
import soloImage from "../assets/images/Korea/Sololeveling.jpg"

const Korea = () => {
    return (
        <div>
            <Container>
            <br/>
            <h1 className="text-white">KOREA MANHWA</h1>
            <br/>
                <Row>
                {/* Nano Machine */}
                    <Col md={4} className="manhwaWrapper" id="korea">
                    <Card className="manhwaImage">
                        <Image src={nanoImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Nano Machine</Card.Title>
                                <Card.Text className="text-left">
                                Setelah dihina dan hidupnya dalam bahaya, seorang yatim piatu dari Kultus Iblis, Cheon Yeo-Woon, mendapat kunjungan tak terduga dari keturunannya dari masa depan yang memasukkan mesin nano ke dalam tubuh Cheon Yeo-Woon, yang berubah drastis. Kehidupan Cheon Yeo-Woon setelah aktivasi. Kisah perjalanan Cheon Yeo-Woon melewati Kultus Iblis dan naik menjadi seniman bela diri terbaik baru saja dimulai.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Murim , Action
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* elceed */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={elceedImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Elceed</Card.Title>
                                <Card.Text className="text-left">
                                Kaiden: Pengguna kemampuan misterius yang bersembunyi di dalam tubuh kucing jalanan. Dia kemudian dijemput oleh Jiwoo setelah terluka setelah bertengkar dengan pengguna kemampuan lain. Dia memiliki kepribadian yang keras kepala dan suka memerintah. Jiwoo: anak SMA yang energik dan banyak bicara yang suka kucing. Dia sangat baik dan juga sepertinya memiliki kemampuan khusus dan kuat.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Action , Comedy 
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* lookism */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={lookismImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Lookism</Card.Title>
                                <Card.Text className="text-left">
                                Park Hyung Seok adalah seorang remaja SMA bertubuh gemuk. Karena penampilannya ini, ia sering menjadi sasaran perundungan teman-teman sekolahnya. Tindakan bully yang dilakukan teman-temannya pun benar-benar sudah di luar batas. Hyung Seok kerap dihina, dipukuli, dan diminta melakukan hal-hal yang merendahkan dirinya. Tapi keajaiban akan segera terjadi dan mengubah penampilan dirinya.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Action , School
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* Northen blade */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={northImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Northen Blade</Card.Title>
                                <Card.Text className="text-left">
                                Bercerita tentang Ketika dunia jatuh ke dalam kegelapan, seniman bela diri berkumpul untuk membentuk 'Sekte Surgawi Utara'. Dengan bantuan dari Sekte Surgawi Utara, orang-orang mulai menikmati kedamaian lagi. Namun, seiring berjalannya waktu para seniman bela diri mulai bersekongkol melawan 'Sekte Surgawi Utara', dan akhirnya menyebabkan kematian Pemimpin Sekte, Jin Kwan-Ho, menghancurkan sekte itu dengannya.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Action , Murim
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* Questism */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={questismImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Questism</Card.Title>
                                <Card.Text className="text-left">
                                Geek game Suhyeon Kim membenci sekolah, dan ketidaksukaan itu saling menguntungkan. Setiap hari dia menghadapi intimidasi tanpa henti dari teman-teman sekelasnya, membuatnya berharap hidupnya lebih seperti game pencarian RPG yang dia mainkan.einginan Suhyeon dikabulkan saat sebuah permintaan pencarian muncul di kehidupan nyata dengan pencarian yang mudah dan hadiah yang menggiurkan. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Action , School
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* SoloLaveling */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={soloImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Solo Leveling</Card.Title>
                                <Card.Text className="text-left">
                                Dunia diserang monster! Muncullah "hunter" untuk menyerang monster-monster itu. Di kalangan hunter, ada yang disebut hunter terlemah di dunia. Itulah julukan Seong Jinwoo. Masuk rumah sakit adalah kebiasaannya setelah masuk ke dungeon. Suatu hari, saat melakukan raid, suatu peristiwa tragis menimpanya. Peristiwa itu hampir merenggut nyawanya. Namun, saat tersadar, dia mendapati dirinya masih hidup.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Action , Monsters
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Korea