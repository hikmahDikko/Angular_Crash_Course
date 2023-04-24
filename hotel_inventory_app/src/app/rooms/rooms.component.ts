import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hikmah Hotel';
  numberOfRooms = 120;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 120,
    availableRooms : 40,
    bookedRooms : 80
  }

  roomsList: RoomList[]=[{
    roomNumber : 1,
    roomType : 'Deluxe Room',
    amenities : 'Air Conditional, Free Wi-Fi, Bluetooth',
    price : 500,
    image : "https://www.dreamstime.com/stock-images-hotel-room-image23802674",
    checkInTime:new Date("10-Feb-2023"),
    checkOutTime : new Date("12-Feb-2023"),
  },
  {
    roomNumber : 2,
    roomType : 'Deluxe Room',
    amenities : 'Air Conditional, Free Wi-Fi, Bluetooth',
    price : 500,
    image : "https://www.dreamstime.com/stock-images-hotel-room-image23802674",
    checkInTime:new Date("10-Feb-2023"),
    checkOutTime : new Date("12-Feb-2023"),
  },
  {
    roomNumber : 3,
    roomType : 'Deluxe Room',
    amenities : 'Air Conditional, Free Wi-Fi, Bluetooth',
    price : 500,
    image : "https://www.dreamstime.com/stock-images-hotel-room-image23802674",
    checkInTime:new Date("10-Feb-2023"),
    checkOutTime : new Date("12-Feb-2023"),
  }]

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  selectedRoom! : RoomList;

  selectRoom(room : RoomList) {
    this.selectedRoom =room;
  }
}
