/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", [
      [ "Logical Name Mapping plugins", "index.html#lnm", null ]
    ] ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", null ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", null ],
        [ "Design and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#implementation_async_NumericAddressed", null ],
        [ "Interface to implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#async_NumericAddressedBackend_interface", null ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ]
        ] ],
        [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", [
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ]
        ] ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", null ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.1", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md_doc_xdma_backend.html", [
      [ "Prerequisites", "md_doc_xdma_backend.html#autotoc_md14", null ],
      [ "Mapping of XDMA driver interfaces", "md_doc_xdma_backend.html#autotoc_md15", [
        [ "Introduction", "spec__transfer_element.html#autotoc_md2", null ],
        [ "A. Definitions", "spec__transfer_element.html#autotoc_md3", [
          [ "Side note", "basic_example.html#autotoc_md0", null ],
          [ "Details:", "q_and_a.html#autotoc_md1", null ],
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md4", null ]
        ] ],
        [ "B. Behavioural specification", "spec__transfer_element.html#autotoc_md5", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md6", null ]
        ] ],
        [ "C. Requirements for all implementations (full and decorator-like)", "spec__transfer_element.html#autotoc_md7", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md8", null ]
        ] ],
        [ "D. Requirements for full implementations (e.g. in backends)", "spec__transfer_element.html#autotoc_md9", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md10", null ]
        ] ],
        [ "E. Requirements for decorator-like implementations", "spec__transfer_element.html#autotoc_md11", [
          [ "(*) Comments", "spec__transfer_element.html#autotoc_md12", null ]
        ] ],
        [ "AXI-Lite Master interface", "md_doc_xdma_backend.html#autotoc_md16", null ],
        [ "AXI MM DMA interface", "md_doc_xdma_backend.html#autotoc_md17", null ],
        [ "Interrupt lines (events)", "md_doc_xdma_backend.html#autotoc_md18", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_numeric_addressed_backend_register_accessor_8h.html#a331e219ebc74268d0ed33fd394f24696",
"accessor2_d__multiplexed_8cpp.html",
"class_chimera_t_k_1_1_data_descriptor.html#af3be571231a41e3600c1143c7162a951a84e2c64f38f78ba3ea5c905ab5a2da27",
"class_chimera_t_k_1_1_exception_dummy.html#a07e0ca117010bf50f9b5788d0b677c16",
"class_chimera_t_k_1_1_logical_name_map_parser.html#a19eaba0f3fcb9456ac1b67c61b7b1c68",
"class_chimera_t_k_1_1_numeric_addressed_register_catalogue.html#aedfd500f67774c61934fe58864e1a87c",
"class_chimera_t_k_1_1_scalar_register_accessor.html#a56b15b8fb7295cc1200802a3c93f770b",
"class_chimera_t_k_1_1_transfer_element_test_accessor.html#ab824c85c63163e76ccda588ef4768f68",
"class_decorator_test_accessor.html#a453ea91104cb96cef0024d7443a71ccc",
"dir_d28a4824dc47e487b107a5db32ef43c4.html",
"namespace_chimera_t_k.html#aa159464ac26217627bc921cc3e9f3c62",
"struct_byte_raw__fixed_point8__4u.html#ab2f8d1a6337c10012312b7f23f0b3141",
"struct_chimera_t_k_1_1_rebot_protocol0.html#a9a43a9108870ac7984db0501e4431c94",
"struct_integers__signed32.html#af9682a9bf7a41431125cce414a59ecb6",
"struct_reg_constant.html#af77d68b21b12af0ef01923cb79b13051",
"struct_short_raw__unsigned16.html#a953a219aaa94e9ffe266c2d014fcf020",
"test_fixed_point_converter_8cpp.html#ae5e68b8ad01abab67a771ccc23e61a94",
"test_shared_dummy_backend_unified_8cpp.html#a139f00d2466d591f60b8d6a73c8273f1"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';