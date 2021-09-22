import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinHangGhe from "./ThongTinHangGhe";
import danhSachGhe from "../Data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BaiTapBooking extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-5">
                  Đặt vé xem phim Cyberlearn
                </h1>
                <div className="mt-2 text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1
                  className="text-warning display-4 mt-2"
                  style={{ fontSize: "35px" }}
                >
                  Danh sách ghế bạn chọn
                </h1>
                <ThongTinHangGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
