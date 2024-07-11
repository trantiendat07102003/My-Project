export enum RestActions {
  Index = "index", // là action dùng để hiển thị danh sách đối tượng {get}
  Show = "show", //là action dùng để hiển thị thông tin chi tiết đối tượng {get}
  New = "new", // là action dùng để hiển thị màn hình chưa form tạo đối tượng {get}
  Create = "create", // là action dùng để tạo đối tượng {post}
  Edit = "edit", // là action dùng để hiển thị form chỉnh sửa thông tin đối tượng {get}
  Update = "update", // là action dùng dể cập nhật thông tin đối tượng {put/patch}
  Destroy = "destroy", // là action dùng để xóa đối tượng {delete}
}
