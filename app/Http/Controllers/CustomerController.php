<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCustomerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCustomerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCustomerRequest  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
    public function customerCreate(){
        return view('customer.registration');
    }
    public function customerCreateSubmit(Request $request){

        $validate = $request->validate([
            "name"=>"required",
            'dob'=>'required|date',
            'email'=>'required|email',
            'phone'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/|digits:11',
            'username'=>'required|min:5',
            'password'=>'required|min:8|max:15|regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{5,20}$/'
        ],
        ['password.regex'=>"Please use atleast 1 uppercase, 1 lowercase, 1 special charactee, 1 number"]
    );
    $rating = 0;
    $ErrorMsg = "User name doesn't exist";


    $userCheck = Customer::where('username',$request->username)->first();
    if($userCheck){

        return back();
    }
    else{
      $image = $request->image;
      $nameImage = $image->getClientOriginalName();
      $image->storeAs('public/images',$nameImage);
      $customer = new Customer();
        $customer->name = $request->name;
        $customer->dob = $request->dob;
        $customer->phone = $request->phone;
        $customer->username = $request->username;
        $customer->email = $request->email;
        $customer->password = $request->password;
        $customer->rating = $rating;
        $customer->image = $nameImage;
        $result = $customer->save();
        if($result){
            return $request;
        }
        else{
            return redirect()->route('customerRegistration');
        }
    }

    }
}