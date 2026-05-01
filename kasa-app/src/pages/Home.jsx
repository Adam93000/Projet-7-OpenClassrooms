import bannerImage from '../assets/images/Image source 1.png'

function Home() {
    return (
        <main style={{ padding: '0 50px', marginBottom: '50px' }}>
            <div style={{
                position: 'relative',
                height: '223px',
                borderRadius: '25px',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 1
                }}></div>

                <img
                    src={bannerImage}
                    alt="Paysage côtier"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />

                <h1 style={{
                    position: 'relative',
                    zIndex: 2,
                    color: '#FFFFFF',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    margin: 0,
                    textAlign: 'center',
                    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                }}>
                    Chez vous, partout et ailleurs
                </h1>
            </div>
        </main>
    )
}

export default Home