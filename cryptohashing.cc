#include <node.h>
#include <node_buffer.h>
#include <v8.h>
#include <nan.h>
#include <stdint.h>

extern "C" {
    #include "bcrypt.h"
    #include "keccak.h"
    #include "quark.h"
    #include "scryptjane.h"
    #include "scryptn.h"
    #include "yescrypt/yescrypt.h"
    #include "yescrypt/sha256_Y.h"
    #include "neoscrypt.h"
    #include "skein.h"
    #include "x11.h"
    #include "groestl.h"
    #include "blake.h"
    #include "fugue.h"
    #include "qubit.h"
    #include "s3.h"
    #include "hefty1.h"
    #include "shavite3.h"
    #include "cryptonight.h"
    #include "x13.h"
    #include "x14.h"
    #include "nist5.h"
    #include "sha1.h"
    #include "x15.h"
    #include "fresh.h"
    #include "dcrypt.h"
    #include "jh.h"
    #include "x5.h"
    #include "c11.h"
    #include "lyra2re.h"
    #include "lyra2v2.h"
    #include "lyra2z.h"
    #include "x17.h"
    #include "xevan.h"
}

#include "boolberry.h"

using namespace node;
using namespace Nan;
using namespace v8;



NAN_METHOD(x11) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    x11_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(x13) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    x13_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(x14) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    x14_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(x15) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    x15_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(x17) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    x17_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(c11) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    //uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    c11_hash(input, output);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(keccak) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    keccak_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(quark) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    quark_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(skein) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    skein_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(scrypt) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

     Local<Number> numn = info[1]->ToNumber();
    unsigned int nValue = numn->Value();
    Local<Number> numr = info[2]->ToNumber();
    unsigned int rValue = numr->Value();

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    scrypt_N_R_1_256(input, output, nValue, rValue, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(neoscrypt) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }
   

    char * input = node::Buffer::Data(target);
    // uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    neoscrypt(input, output, 0);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(groestl) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    groestl_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(groestlmyriad) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    groestlmyriad_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(qubit) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    qubit_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(nist5) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    nist5_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(sha1) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    sha1_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(fresh) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    fresh_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(lyra2re) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    lyra2re_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}

NAN_METHOD(lyra2v2) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    lyra2v2_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(lyra2z) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    lyra2z_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}




NAN_METHOD(fugue) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    fugue_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}

NAN_METHOD(xevan) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    xevan_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(bcrypt) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    //uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    bcrypt_hash(input, output);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}



NAN_METHOD(blake) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    blake_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(hefty1) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    hefty1_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_METHOD(shavite3) {
    if (info.Length() != 1){
        Nan::ThrowError("You must provide exactly one argument.");
        return;
    }

    v8::Local<v8::Object> target = info[0]->ToObject();

    if(!node::Buffer::HasInstance(target)) {
        Nan::ThrowError("Argument should be a buffer object.");
        return;
    }

    char * input = node::Buffer::Data(target);
    uint32_t input_len = node::Buffer::Length(target);
    char * output = new char[32];

    shavite3_hash(input, output, input_len);

    Nan::MaybeLocal<v8::Object> buffer = Nan::CopyBuffer(output, 32);

    delete []output;
    info.GetReturnValue().Set(buffer.ToLocalChecked());
}


NAN_MODULE_INIT(init) {
    NAN_EXPORT(target, x11);
    NAN_EXPORT(target, x13);
    NAN_EXPORT(target, x14);
    NAN_EXPORT(target, x15);
    NAN_EXPORT(target, x17);
    NAN_EXPORT(target, c11);
    NAN_EXPORT(target, keccak);
    NAN_EXPORT(target, quark);
    NAN_EXPORT(target, scrypt);
    NAN_EXPORT(target, neoscrypt);
    NAN_EXPORT(target, skein);
    NAN_EXPORT(target, groestl);
    NAN_EXPORT(target, groestlmyriad);
    NAN_EXPORT(target, qubit);  
    NAN_EXPORT(target, nist5);  
    NAN_EXPORT(target, sha1);  
    NAN_EXPORT(target, fresh);    
    NAN_EXPORT(target, lyra2re);     
    NAN_EXPORT(target, lyra2v2); 
    NAN_EXPORT(target, lyra2z);   
    NAN_EXPORT(target, fugue);    
    NAN_EXPORT(target, xevan);  
    NAN_EXPORT(target, bcrypt);
    NAN_EXPORT(target, blake);   
    NAN_EXPORT(target, hefty1);
    NAN_EXPORT(target, shavite3);
    
     
    


    
    
}

NODE_MODULE(cryptohashing, init)
