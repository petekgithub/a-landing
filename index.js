import React from "react";

import { Button, Img, Input, Line, Text } from "../../components";
import HomepageImage43 from "../../components/HomepageImage43";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu items-center justify-start mx-auto pb-[300px] w-full">
        <div className="bg-gray-900 h-[25px] w-full"></div>
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-1 flex-row items-center justify-start p-5 w-full">
            <Img
              className="h-[50px] ml-[30px] mt-[5px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <ul className="flex flex-row md:hidden items-start justify-start ml-[161px] md:px-10 sm:px-5 px-[89px] w-[63%] common-row-list">
              <li>
                <a href="javascript:">
                  <div className="flex flex-row items-end justify-center">
                    <Text className="capitalize text-black-900 text-center text-sm">
                      Services
                    </Text>
                    <Img
                      className="h-1 mb-[3px] ml-[5px] mt-[9px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <div className="flex flex-row gap-[7px] items-end justify-center ml-[37px]">
                    <Text className="capitalize text-black-900 text-center text-sm">
                      Solutions
                    </Text>
                    <Img
                      className="h-1 mb-[3px] mt-[9px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="capitalize ml-[35px] text-black-900 text-center text-sm"
                >
                  <Text>Hire Magento Developer</Text>
                </a>
              </li>
            </ul>
            <Img
              className="h-[11px] ml-[70px] w-[11px]"
              src="images/img_call.svg"
              alt="call"
            />
            <Img
              className="h-[11px] ml-[15px]"
              src="images/img_lock.svg"
              alt="lock"
            />
          </div>
          <Line className="bg-black-900_01 h-px mt-0.5 w-full" />
        </header>
        <div
          className="bg-cover bg-no-repeat md:h-[498px] h-[650px] pl-[90px] pt-[90px] md:px-5 relative w-full"
          style={{ backgroundImage: "url('images/img_p1.svg')" }}
        >
          <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[53%]">
            <Img
              className="h-[498px] md:h-auto object-cover"
              src="images/img_image.png"
              alt="image"
            />
          </div>
          <Img
            className="absolute h-[413px] left-[10%] top-[14%]"
            src="images/img_text.svg"
            alt="text"
          />
        </div>
        <div className="bg-white-A700 h-[100px] w-full"></div>
        <div className="bg-gray-900 flex flex-col items-center justify-end p-[47px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start mt-[5px] w-[52%] md:w-full">
            <Text className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700">
              AQELTECH Project Management
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[29px] w-[92%] md:w-full">
              <Img
                className="h-[42px]"
                src="images/img_laptop.svg"
                alt="laptop"
              />
              <Img
                className="h-10 md:ml-[0] ml-[181px] md:mt-0 mt-0.5"
                src="images/img_vector.svg"
                alt="vector"
              />
              <Img
                className="h-[42px] md:ml-[0] ml-[164px] w-[41px]"
                src="images/img_icon.svg"
                alt="icon"
              />
              <Img
                className="h-10 md:ml-[0] ml-[131px] md:mt-0 mt-0.5"
                src="images/img_lock_gray_100.svg"
                alt="lock_One"
              />
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-5 w-full">
              <Text className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700">
                Planning
              </Text>
              <Text className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700">
                Design & Develop
              </Text>
              <Text className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700">
                Deliver
              </Text>
              <a
                href="javascript:"
                className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-center text-white-A700"
              >
                <Text>Contact Us</Text>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1300px] mt-[70px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="flex flex-col gap-[21px] items-start justify-start">
              <Text className="font-bold leading-[31.00px] sm:text-[17px] md:text-[19px] text-[21px] text-light_blue-600 w-[96%] sm:w-full">
                Create Customized eCommerce Entity With Magento Development
                Services
              </Text>
              <Text className="font-light leading-[24.00px] text-base text-black-900 text-justify">
                <>
                  Magento is a leading eCommerce platform, best known for its
                  niche to build an innovative, scalable, versatile online
                  shopping platform. <br />
                  It is a perfect open-source platform for enterprises to build
                  a profit-generating eCommerce platform and meet the
                  requirements of target customers.
                  <br />
                  Here, we offer you end-to-end Magento eCommerce development
                  services to maintain a low-cost platform that guarantees
                  quality, future updates, and low maintenance costs.
                  <br />
                  <br />
                  As a reputed Magento development company, and with the help of
                  our expert developers and head extension developers, We give
                  Magento Development benefits that ensure assorted usefulness
                  and a smooth client experience. <br />
                  Fabricate your eCommerce store and ensure your business’s
                  growth.
                </>
              </Text>
            </div>
            <HomepageImage43 className="h-[543px] relative w-[56%] md:w-full" />
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col font-avenir items-center justify-end mt-[70px] p-[70px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1193px] mx-auto w-full">
            <Text className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900_01 text-center">
              Wide Array of Magento Development Services
            </Text>
            <div className="bg-gray-500_7f h-[25px] mt-1.5 w-4/5"></div>
            <div className="bg-gray-500_7f h-[25px] mt-[7px] w-[48%]"></div>
            <div className="flex flex-col gap-[46px] items-center justify-start mt-[35px] w-full">
              <div className="md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col gap-[18px] items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start w-3/4 md:w-full">
                    <Img
                      className="h-[46px]"
                      src="images/img_logo_deep_orange_500.svg"
                      alt="logo"
                    />
                    <Text className="font-medium text-base text-black-900_01 text-center">
                      Magento 2 Development
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-10 mt-1.5"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text className="font-medium mt-[30px] text-base text-black-900_01 text-center">
                    Front-End Development
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[17px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-[38px] mt-1.5"
                    src="images/img_cart.svg"
                    alt="cart"
                  />
                  <Text className="font-medium mt-[33px] text-base text-black-900_01 text-center">
                    Magento eCommerce Design
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[17px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[73%] md:w-full">
                    <Img
                      className="h-[46px]"
                      src="images/img_logo_deep_orange_500.svg"
                      alt="logo"
                    />
                    <Text className="font-medium text-base text-black-900_01 text-center">
                      API Module Integration
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-1.5 w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-[43px] mt-1.5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text className="font-medium mt-[27px] text-base text-black-900_01 text-center">
                    Payment Module Services
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[18px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-[46px]"
                    src="images/img_logo_deep_orange_500.svg"
                    alt="logo"
                  />
                  <Text className="font-medium mt-[31px] text-base text-black-900_01 text-center">
                    Ongoing Magento Support
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[17px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-[46px]"
                    src="images/img_logo_deep_orange_500.svg"
                    alt="logo"
                  />
                  <Text className="font-medium mt-[31px] text-base text-black-900_01 text-center">
                    Magento Marketplace
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[17px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[15px] rounded-[21px] shadow-bs w-full">
                  <Img
                    className="h-[46px]"
                    src="images/img_logo_deep_orange_500.svg"
                    alt="logo"
                  />
                  <Text className="font-medium mt-[31px] text-base text-black-900_01 text-center">
                    eCommerce App Development
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-1.5 mt-[17px] w-full">
                    <div className="bg-gray-500_7f h-5 w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[3px] w-full"></div>
                    <div className="bg-gray-500_7f h-5 mt-[7px] w-[84%]"></div>
                    <Button className="cursor-pointer font-medium min-w-[100px] mt-[15px] text-[10px] text-center">
                      READ MORE
                    </Button>
                  </div>
                </div>
              </div>
              <Text className="bg-black-900 font-medium h-[30px] justify-center pb-0.5 pt-[7px] sm:px-5 px-[26px] rounded-[15px] text-center text-sm text-white-A700 w-[122px]">
                Explore All
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-avenir items-center justify-start max-w-[940px] mt-[72px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900_01 text-center">
              Our Magento Development Solutions
            </Text>
            <Text className="mt-[18px] text-black-900_01 text-center text-sm">
              We bring your eCommerce idea to reality with our end-to-end
              Magento eCommerce development solutions.
            </Text>
            <div className="flex flex-col items-center justify-start mt-[26px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Purchase & Replenishment
                        <br />
                        Solution:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Timely procurement of products from the supplier is a
                        key parameter of the seller&#39;s success. The big
                        questions are what to buy, how much to buy and when to
                        buy.
                      </>
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Mobile Point of Sale Solution:
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      Mobility is a raging trend that is making it big in every
                      industry vertical, particularly retail and e-commerce.
                      Enable mobile point of sale to speed up product buying
                      experience.
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[50px] w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Business Analytics Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Retail selling has seen a big transition in recent years
                        as multiple selling channels have become a common
                        concept. Analyze the product selling patterns and
                        changing customer trends to increase offerings.
                      </>
                    </span>
                  </Text>
                  <a
                    href="javascript:"
                    className="bg-light_blue-600 font-medium h-[22px] justify-center pb-0.5 pt-[5px] px-5 rounded-[11px] text-[10px] text-center text-white-A700 w-[100px]"
                  >
                    <Text>READ MORE</Text>
                  </a>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Multichannel Inventory Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Inventory management is perhaps one of the biggest
                        challenges for the e-commerce industry. Those having a
                        multi-channel business can rely on seamless inventory
                        management.
                      </>
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[38px] w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start md:mt-0 mt-[11px]">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Customer Relationship Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        With our{" "}
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      Magento ongoing support
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      , Customer relations make the mainstay of a retail
                      business as they determine whether a business would be
                      able to retain its shoppers or not.
                    </span>
                  </Text>
                  <a
                    href="javascript:"
                    className="bg-light_blue-600 font-medium h-[22px] justify-center pb-0.5 pt-[5px] px-5 rounded-[11px] text-[10px] text-center text-white-A700 w-[100px]"
                  >
                    <Text>READ MORE</Text>
                  </a>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start mb-2 w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Multi-Warehouse Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        The modern-day retail business is complex as it extends
                        beyond a single selling location. The seller needs to
                        have multiple points of sales to enable seamless
                        transfer of products in a particular demographic.
                      </>
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[41px] w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start md:mt-0 mt-2">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        E-Commerce Solutions
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        The e-commerce space is a fiercely competitive one, with
                        thousands of sellers making a beeline for this raging
                        trend. Rely on technically advanced eCommerce solutions
                        to experience seamless transactions.
                      </>
                    </span>
                  </Text>
                  <a
                    href="javascript:"
                    className="bg-light_blue-600 font-medium h-[22px] justify-center pb-0.5 pt-[5px] px-5 rounded-[11px] text-[10px] text-center text-white-A700 w-[100px]"
                  >
                    <Text>READ MORE</Text>
                  </a>
                </div>
                <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Shipping & Tracking Solution:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Shipping and tracking make an integral part of the
                        e-commerce selling process. The function is concerned
                        with enabling the reach of the right products.
                      </>
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[19px] w-full">
                <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:mt-0 mt-[30px] w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Omnichannel Retail Management Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Retailers have started to realize the significance of
                        omnichannel transformation as the current market
                        scenario requires them to reach customers through
                        multiple touchpoints.
                      </>
                    </span>
                  </Text>
                  <Input
                    name="icon_Five"
                    placeholder="READ MORE"
                    className="font-medium p-0 placeholder:text-white-A700 text-[10px] text-center w-full"
                    wrapClassName="w-[28%]"
                  ></Input>
                </div>
                <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-[39%] md:w-full">
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Wholesale B2B Commerce Solutions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        E-commerce selling is no longer confined to
                        business-to-customers enterprises by has proliferated
                        into the business-to-business scenario too.
                      </>
                    </span>
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[100px] text-[10px] text-center">
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex flex-col font-avenir items-center justify-end mt-[70px] p-[66px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start max-w-[1140px] mt-[5px] mx-auto w-full">
            <div className="flex flex-col gap-3 items-center justify-start">
              <Text className="sm:text-[17px] md:text-[19px] text-[21px] text-black-900 text-center">
                Why Should You Choose Magento For eCommerce Development?
              </Text>
              <Text className="text-black-900_01 text-center text-sm w-full">
                Stay ahead in the fast-paced and competitive world of eCommerce
                by creating your website on a robust and scalable platform.
                Avail of Magento development services to meet your online retail
                business requirements with utmost flexibility.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[200px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Create a scalable eCommerce Store:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Build an online retail store to manage multiple sets of
                        customers from a single dashboard and easily scale up
                        with ease.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Manage multiple stores:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Run multiple eCommerce channels from a single
                        best-integrated platform and refer to the single
                        dashboard to understand all the things.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Accessible robust & flexible APIs:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Integrate the functionality of the Magento platform with
                        several third-party APIs that best communicate to bring
                        additional operations.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Create an Omnichannel experience:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Acquire more customers from both online and offline
                        retail channels while integrating all the information on
                        the Magento platform.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Ready to use extensions:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Enable additional retail store functionalities by
                        accessing easy-to-access extensions.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-[62px] sm:mt-0 mt-1.5"
                    src="images/img_icon_blue_gray_100_62x75.svg"
                    alt="icon"
                  />
                  <Text className="text-black-900_01 text-sm">
                    <span className="md:text-[19px] sm:text-[17px] text-black-900_01 font-avenir text-left text-[21px] font-extrabold">
                      <>
                        Multiple Payment Methods:
                        <br />
                      </>
                    </span>
                    <span className="text-black-900_01 font-avenir text-left text-base font-normal">
                      <>
                        <br />
                        Supports an extensive range of payment methods as per
                        the convenience of a different set of customers.
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-avenir items-center justify-start max-w-[1140px] mt-[70px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-3 items-center justify-start mb-[60px]">
              <Text className="leading-[31.00px] sm:text-[17px] md:text-[19px] text-[21px] text-black-900 w-full">
                <span className="text-black-900 font-avenir text-left font-normal">
                  Why Choose{" "}
                </span>
                <span className="text-light_blue-600 font-avenir text-left font-normal">
                  AQELTECH
                </span>
                <span className="text-black-900 font-avenir text-left font-normal">
                  {" "}
                  as Your eCommerce Partner?
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Diverse experience
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    We have worked on hundreds of projects deployed in
                    noticeably different industry <br /> verticals. The
                    diversity and extent of our experience are incorporated into
                    your <br /> eCommerce solution for superior performance.
                  </>
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Client-oriented approach
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    We treat every project as a unique undertaking. We carefully
                    listen to your business- <br /> specific needs, paying
                    attention to detail. Every solution is built earnestly to
                    ensure <br /> that all your requirements are addressed.
                  </>
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Market-best technologies
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    Our eCommerce developers always use the most advanced tools
                    and technologies <br /> to deliver best-in-class solutions
                    to every client. Whether it’s a web framework or a <br />{" "}
                    theme design tool, we only use the best ones.
                  </>
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Impressive professionalism
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    Whether it’s requirement analysis, communication, or project
                    execution, we <br /> approach everything with great
                    professionalism. Our teams are trained to maintain <br />{" "}
                    proficiency even during challenging situations.
                  </>
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Timely delivery
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    When you hire Shopify developers from us, we ensure that
                    your solution is <br /> deployed within the estimated time
                    without any delay. We use a predefined <br /> process and
                    tried-and-tested tools to always stay on track.
                  </>
                </span>
              </Text>
              <Text className="text-black-900_01 text-sm">
                <span className="text-black-900_01 font-avenir text-left text-base font-medium">
                  <>
                    Developers’ community
                    <br />
                  </>
                </span>
                <span className="text-black-900_01 font-avenir text-left text-xs font-light">
                  <>
                    {" "}
                    Our eCommerce developers are enthusiastic members of the
                    global community of <br /> 5,000+ Shopify developers. This
                    community is known for its passion and <br /> collaboration
                    for building a futuristic world of online commerce.
                  </>
                </span>
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[74px] w-[37%] md:w-full">
              <Img
                className="h-[577px] md:h-auto object-cover w-full"
                src="images/img_img.png"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex md:flex-col flex-row font-avenir md:gap-10 gap-[200px] items-center justify-start p-7 sm:px-5 w-full">
          <Text className="md:ml-[0] ml-[121px] md:mt-0 mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-gray-100_01">
            <span className="text-gray-100_01 font-avenir text-left font-normal">
              Want to unleash the unlimited potential of{" "}
            </span>
            <span className="text-deep_orange-500 font-avenir text-left font-normal">
              Magento
            </span>
            <span className="text-gray-100_01 font-avenir text-left font-normal">
              {" "}
              for your business?
            </span>
          </Text>
          <Text className="bg-light_blue-600 font-medium h-[25px] justify-center md:mt-0 my-[3px] sm:px-5 px-[22px] py-0.5 rounded-[12px] text-center text-sm text-white-A700 w-[125px]">
            TALK TO US
          </Text>
        </div>
        <div className="flex flex-col font-ubuntu items-center justify-start mt-[72px] w-full">
          <Text className="font-bold sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900">
            Our Portfolio
          </Text>
          <Text className="mt-7 sm:text-[17px] md:text-[19px] text-[21px] text-black-900 text-center w-[58%] sm:w-full">
            We are a leading Magento development company that has completed a
            large number of projects till date.
          </Text>
          <div className="bg-white-A700 flex flex-col items-center justify-end p-1.5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1427px] mb-[118px] mt-[197px] mx-auto md:px-5 w-full">
              <Img
                className="h-[43px] w-[43px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Img
                className="h-[43px] w-[43px]"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <Img
            className="h-2.5 mt-[25px]"
            src="images/img_indicator.svg"
            alt="indicator"
          />
        </div>
        <div className="bg-gray-100_01 flex flex-col font-ubuntu md:gap-10 gap-[73px] items-center justify-start mt-[70px] p-[27px] sm:px-5 w-full">
          <Text className="font-bold sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-900">
            Our Brands
          </Text>
          <div className="h-[172px] md:h-[214px] sm:h-[304px] max-w-[1119px] mb-[42px] mx-auto md:px-5 relative w-full">
            <div className="absolute h-28 sm:h-[262px] inset-[0] justify-center m-auto w-full">
              <Img
                className="absolute h-12 inset-[0] justify-center m-auto"
                src="images/img_arrows.svg"
                alt="arrows"
              />
              <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto w-[69%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-28 items-center justify-start p-4 w-[31%] sm:w-full"
                  style={{ backgroundImage: "url('images/img_logoleft.svg')" }}
                >
                  <Img
                    className="h-[79px]"
                    src="images/img_logo_blue_gray_100.svg"
                    alt="logo_One"
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-28 items-center justify-start p-4 w-[31%] sm:w-full"
                  style={{ backgroundImage: "url('images/img_logoleft.svg')" }}
                >
                  <Img
                    className="h-[79px]"
                    src="images/img_logo_blue_gray_100_79x175.svg"
                    alt="logo_Two"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-sm w-[33%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[172px] items-center justify-start p-[25px] sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_logoleft.svg')" }}
              >
                <Img
                  className="h-[122px]"
                  src="images/img_logo_blue_gray_100_122x270.svg"
                  alt="logo_Three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
