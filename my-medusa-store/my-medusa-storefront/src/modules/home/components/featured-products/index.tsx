import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import CountrySelect from "@modules/layout/components/country-select"
const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Products
          </span>
          <p className="text-xl-regular text-gray-900 max-w-lg mb-4">
           Search native,traditional and famous products globally and buy them with an initiative to
           support artisians work!!
          </p>
          
          <UnderlineLink href="/store">Explore products</UnderlineLink>
          <br />
          <br />
          <div className="min-w-[316px]  xsmall:justify-end">
          <CountrySelect />
        </div>
          

<br />
<br />
<br />
{/* row1  */}
          <div style={{margin:'0 -5px',marginLeft:'200px'}} className="row">
              {/* card1 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                    <div className="image">
                        <img src="https://cdn.shopify.com/s/files/1/0638/8491/9013/products/InShot_20220717_143729445.jpg?v=1658050806&width=1100" alt=""/>
                    </div>
                    <div style={{textAlign:'center',padding: '20px'}} className="title">
                        <h3>Brass Idols</h3>
                        <p>Muradabad,UP</p>
                        <p>India</p>
                        <p>$160</p>

                       
                    </div>
                    <hr />
                    <div style={{textAlign: 'center'}} className="desc">
                        <p id="name"></p>
                        <button style={{marginTop: '20px',
                          marginBottom: '20px',
                          backgroundColor: 'white',
                          border: '1px solid black',
                          borderRadius: '5px',
                          padding: '5px',
                          cursor: 'pointer'}}>Add to cart</button>
                    </div>
                </div>
                  
              </div>
              
              {/* card2 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                  <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                      <div className="image">
                          <img src="https://www.fabfunda.com/product-img/soft-lichi-silk-saree-1607425837.jpeg" alt=""/>
                      </div>
                      <div style={{textAlign:'center',padding: '20px'}} className="title">
                        <h3>Kanjivaram Saare</h3>
                        <p>Kanjipuram,Tamil Nadu </p>
                        <p>India</p>
                        <p>$145</p>
                      </div>
                      <hr />
                      <div style={{textAlign: 'center'}} className="desc">
                          <p id="name"></p>
                          <button style={{marginTop: '20px',
                            marginBottom: '20px',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '5px',
                            cursor: 'pointer'}}>Add to cart</button>
                      </div>
                  </div>
  
            </div>

        </div>
<br />
<br />
{/* row2 */}
<div style={{margin:'0 -5px',marginLeft:'200px'}} className="row">
              {/* card1 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                    <div className="image">
                        <img src="https://ae01.alicdn.com/kf/HTB1cRKkcUGF3KVjSZFmq6zqPXXac/Classic-Indian-Kundan-Jhumka-Drop-Earrings-For-Women-Gypsy-Tribal-Afghan-Long-Chain-Bell-Bead-Peacock.jpg_Q90.jpg_.webp" alt=""/>
                    </div>
                    <div style={{textAlign:'center',padding: '20px'}} className="title">
                        <h3>Oxidized Earrings</h3>
                        <p>Rajasthan</p>
                        <p>India</p>
                        <p>$55</p>

                    </div>
                    <hr />
                    <div style={{textAlign: 'center'}} className="desc">
                        <p id="name"></p>
                        <button style={{marginTop: '20px',
                          marginBottom: '20px',
                          backgroundColor: 'white',
                          border: '1px solid black',
                          borderRadius: '5px',
                          padding: '5px',
                          cursor: 'pointer'}}>Add to cart</button>
                    </div>
                </div>
                  
              </div>
              
              {/* card2 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                  <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                      <div className="image">
                          <img src="https://cdn.shopify.com/s/files/1/1306/4195/products/7_1_1024x1024.png?v=1657537368" alt=""/>
                      </div>
                      <div style={{textAlign:'center',padding: '20px'}} className="title">
                          <h3>Traditional Circle Frame set</h3>
                          <p>Kolkata,West Bengal</p>
                          <p>India</p>
                          <p>$132</p>
                      </div>
                      <hr />
                      <div style={{textAlign: 'center'}} className="desc">
                          <p id="name"></p>
                          <button style={{marginTop: '20px',
                            marginBottom: '20px',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '5px',
                            cursor: 'pointer'}}>Add to cart</button>
                      </div>
                  </div>
  
            </div>

        </div>

<br />
<br />
  {/* row3 */}
  <div style={{margin:'0 -5px',marginLeft:'200px'}} className="row">
              {/* card1 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                    <div className="image">
                        <img src="https://i.pinimg.com/originals/bd/92/32/bd9232d04b8a69b277cf8c5a6c53629a.jpg" alt=""/>
                    </div>
                    <div style={{textAlign:'center',padding: '20px'}} className="title">
                        <h3>Crochet Hat</h3>
                        <p>Paris</p>
                        <p>France</p>
                        <p>$90</p>
                    </div>
                    <hr />
                    <div style={{textAlign: 'center'}} className="desc">
                        <p id="name"></p>
                        <button style={{marginTop: '20px',
                          marginBottom: '20px',
                          backgroundColor: 'white',
                          border: '1px solid black',
                          borderRadius: '5px',
                          padding: '5px',
                          cursor: 'pointer'}}>Add to cart</button>
                    </div>
                </div>
                  
              </div>
              
              {/* card2 */}
              <div style={{float:'left', width:'50%', padding:'0 10px'}} className="col">

                  <div  className="cards" id="cards" style={{width:'55%',margin: '2px',boxShadow: '2px 2px 10px black',borderRadius: '5px'}}>
                      <div className="image">
                          <img src="https://vanillapapers.net/wp-content/uploads/2017/08/fayoum-2.jpg" alt=""/>
                      </div>
                      <div style={{textAlign:'center',padding: '20px'}} className="title">
                        <h3>Fayoumi pottery</h3>
                        <p>Cairo</p>
                        <p>Egypt</p>
                        <p>$999</p>
                      </div>
                      <hr />
                      <div style={{textAlign: 'center'}} className="desc">
                          <p id="name"></p>
                          <button style={{marginTop: '20px',
                            marginBottom: '20px',
                            backgroundColor: 'white',
                            border: '1px solid black',
                            borderRadius: '5px',
                            padding: '5px',
                            cursor: 'pointer'}}>Add to cart</button>
                      </div>
                  </div>
  
            </div>

        </div>





        </div>     
      </div>
    </div>
  )
}

export default FeaturedProducts
