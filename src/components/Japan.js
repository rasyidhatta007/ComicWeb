import {Card, Container, Row, Col, Image} from "react-bootstrap"
import blackImage from "../assets/images/Japan/BlackClover.jpg"
import bleachImage from "../assets/images/Japan/Bleach.jpg"
import hxhImage from "../assets/images/Japan/HxH.jpg"
import narutoImage from "../assets/images/Japan/Naruto.jpg"
import onepieceImage from "../assets/images/Japan/OnePiece.jpg"
import dragonImage from "../assets/images/Japan/Dragonballz.jpg"

const Japan = () => {
    return (
        <div>
            <Container>
            <br/>
            <h1 className="text-white">JAPAN MANGA</h1>
            <br/>
                <Row>
                {/* Black Clover */}
                    <Col md={4} className="manhwaWrapper" id="japan">
                    <Card className="manhwaImage">
                        <Image src={blackImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Black Clover</Card.Title>
                                <Card.Text className="text-left">
                                Ceritanya mengisahkan tentang seorang anak laki-laki bernama Asta yang lahir tanpa kekuatan sihir, suatu fenomena yang tidak normal di dunia tempatnya tinggal. Bersama dengan teman-temannya dari Banteng hitam, dia bercita-cita untuk menjadi Kaisar sihir.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Petualangan, fantasi
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* Bleach */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={bleachImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Bleach</Card.Title>
                                <Card.Text className="text-left">
                                Bleach mengisahkan tentang Ichigo kurosaki, seorang pelajar SMA berambut jingga, yang terpaksa menjadi shinigami (dewa kematian versi jepang)pengganti, setelah menyelamatkan Rukia Kuchiki seorang shinigami yang sedang bertugas di dunia manusia untuk mengalahkan roh jahat Hollow.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Petualangan, supernatural
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* HxH */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={hxhImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Hunter x Hunter</Card.Title>
                                <Card.Text className="text-left">
                                menceritakan kisah petuangan sekelompok anak yang memiliki impian untuk menjadi hunter andal dengan mengikuti proses seleksi asosiasi hunter. Berlatar cerita dunia fantasi, Hunter X Hunter sukses memikat hati para penggemar serial manga dan animenya.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Petualangan, fantasi, seni bela diri
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* Naruto */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={narutoImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Naruto</Card.Title>
                                <Card.Text className="text-left">
                                Manga Naruto bercerita seputar kehidupan tokoh utamanya, Naruto Uzumaki, seorang ninja yang hiperaktif, periang, dan ambisius yang ingin mewujudkan keinginannya untuk mendapatkan gelar Hokage, pemimpin dan ninja terkuat di desanya.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Aksi, Petualangan, Fantasi
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* OnePiece */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={onepieceImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">One Piece</Card.Title>
                                <Card.Text className="text-left">
                                Anime One Piece menceritakan perjalanan Luffy, seorang anak laki-laki yang bertemu bajak laut hebat bernama Shanks, dimana Luffy terinspirasi oleh kehebatan Shanks dan bermimpi suatu hari nanti ingin menjadi bajak laut. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Petualangan, fantasi
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                {/* Drgaon Ball */}
                <Col md={4} className="manhwaWrapper">
                    <Card className="manhwaImage">
                        <Image src={dragonImage} alt="Nano Manhwa" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Dragon Ball</Card.Title>
                                <Card.Text className="text-left">
                                Dragon Ball bercerita tentang seorang bocah bernama Goku yang hidup di tengah gunung sendirian. Dia lalu bertemu dengan Bulma, seorang gadis muda genius, yang mengumpulkan 7 bola ajaib yang katanya bisa mengabulkan semua keinginan.
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Aksi, Petualangan, Fantasi
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

export default Japan